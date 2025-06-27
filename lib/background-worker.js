function loadScript() {
  import("./gs-worker.js");
}

var Module;

// 精确压缩参数计算 - 加入安全系数确保达到目标
function calculatePreciseCompressionParams(originalSize, targetSize) {
  const targetRatio = targetSize / originalSize;
  const compressionNeeded = 1 - targetRatio;

  // 添加安全系数，让压缩更激进以确保达到目标
  const safetyFactor = 0.80; // 80%安全系数，确保结果小于目标
  const adjustedTargetRatio = targetRatio * safetyFactor;
  const adjustedCompressionNeeded = 1 - adjustedTargetRatio;

  console.log(`🎯 Precise Compression Analysis:`);
  console.log(`   Original Target: ${(targetRatio * 100).toFixed(1)}% of original`);
  console.log(`   Adjusted Target: ${(adjustedTargetRatio * 100).toFixed(1)}% (with safety factor)`);
  console.log(`   Compression needed: ${(adjustedCompressionNeeded * 100).toFixed(1)}%`);

  let pdfSettings, imageRes, monoRes;

  // 基于调整后的目标比例进行更激进的参数映射
  if (adjustedTargetRatio >= 0.85) {
    // 轻微压缩
    pdfSettings = "/printer";
    imageRes = 220;
    monoRes = 550;
  } else if (adjustedTargetRatio >= 0.70) {
    // 轻度压缩
    pdfSettings = "/ebook";
    imageRes = 180;
    monoRes = 450;
  } else if (adjustedTargetRatio >= 0.55) {
    // 中度压缩
    pdfSettings = "/ebook";
    imageRes = 130;
    monoRes = 350;
  } else if (adjustedTargetRatio >= 0.45) {
    // 重度压缩
    pdfSettings = "/screen";
    imageRes = 100;
    monoRes = 280;
  } else if (adjustedTargetRatio >= 0.35) {
    // 超重压缩
    pdfSettings = "/screen";
    imageRes = 75;
    monoRes = 220;
  } else if (adjustedTargetRatio >= 0.25) {
    // 极重压缩
    pdfSettings = "/screen";
    imageRes = 60;
    monoRes = 180;
  } else {
    // 极限压缩
    pdfSettings = "/screen";
    imageRes = 45;
    monoRes = 140;
  }

  // 根据压缩需求进一步微调
  if (adjustedCompressionNeeded > 0.6) {
    // 需要超过60%压缩时，进一步降低分辨率
    imageRes = Math.round(imageRes * 0.8);
    monoRes = Math.round(monoRes * 0.8);
  } else if (adjustedCompressionNeeded > 0.4) {
    // 需要超过40%压缩时，适度降低分辨率
    imageRes = Math.round(imageRes * 0.9);
    monoRes = Math.round(monoRes * 0.9);
  }

  // 确保参数在安全范围内
  imageRes = Math.max(35, Math.min(300, imageRes));
  monoRes = Math.max(100, Math.min(1200, monoRes));

  console.log(`📊 Precise Parameters (with safety factor):`);
  console.log(`   PDF Settings: ${pdfSettings}`);
  console.log(`   Color/Gray Resolution: ${imageRes}dpi`);
  console.log(`   Mono Resolution: ${monoRes}dpi`);
  console.log(`   Safety Factor: ${safetyFactor} (${((1-safetyFactor)*100).toFixed(1)}% more aggressive)`);
  console.log(`   Expected result: ${(adjustedTargetRatio * 100).toFixed(1)}% - ${(targetRatio * 100).toFixed(1)}% range`);

  return {
    pdfSettings,
    imageRes,
    monoRes,
    targetRatio,
    adjustedTargetRatio,
    safetyFactor
  };
}

function _GSPS2PDF(
  dataStruct,
  responseCallback,
) {
  // first download the ps data
  var xhr = new XMLHttpRequest();
  xhr.open("GET", dataStruct.psDataURL);
  xhr.responseType = "arraybuffer";
  xhr.onload = function () {
    console.log('🔄 Starting smart PDF compression...')
    // release the URL
    self.URL.revokeObjectURL(dataStruct.psDataURL);

    const originalSize = xhr.response.byteLength;
    const targetSize = dataStruct.targetSize || originalSize * 0.7;

    // 计算精确压缩参数（带安全系数）
    const params = calculatePreciseCompressionParams(originalSize, targetSize);

    console.log(`📊 Precise Compression Target:`);
    console.log(`   Original: ${(originalSize/1024/1024).toFixed(2)}MB`);
    console.log(`   Target: ${(targetSize/1024/1024).toFixed(2)}MB`);
    console.log(`   Adjusted Target: ${(originalSize * params.adjustedTargetRatio/1024/1024).toFixed(2)}MB`);
    console.log(`   Safety Factor: ${(params.safetyFactor * 100).toFixed(0)}%`);

    //set up EMScripten environment
    Module = {
      preRun: [
        function () {
          console.log('📝 Writing input file...');
          const inputData = new Uint8Array(xhr.response);
          console.log(`📄 Input file size: ${inputData.length} bytes`);
          self.Module.FS.writeFile("input.pdf", inputData);

          // 验证输入文件
          const inputExists = self.Module.FS.analyzePath("input.pdf").exists;
          console.log(`✅ Input file created: ${inputExists}`);
        },
      ],
      postRun: [
        function () {
          try {
            // 检查输出文件是否存在
            if (!self.Module.FS.analyzePath("output.pdf").exists) {
              console.error('❌ Output file not created. Checking for errors...');

              // 尝试读取可能的错误信息
              try {
                const files = self.Module.FS.readdir('/');
                console.log('📁 Available files:', files);
              } catch (e) {
                console.log('Cannot list files');
              }

              // 创建一个错误响应
              responseCallback({ error: 'Ghostscript processing failed - no output file created' });
              return;
            }

            var uarray = self.Module.FS.readFile("output.pdf", { encoding: "binary" });

            // 检查输出文件是否有效
            if (!uarray || uarray.length === 0) {
              console.error('❌ Output file is empty');
              responseCallback({ error: 'Ghostscript processing failed - empty output file' });
              return;
            }

            var blob = new Blob([uarray], { type: "application/octet-stream" });
            var pdfDataURL = self.URL.createObjectURL(blob);

            const finalSize = blob.size;
            const actualRatio = finalSize / originalSize;
            const savings = ((originalSize - finalSize) / originalSize * 100).toFixed(1);
            const targetDiff = Math.abs(finalSize - targetSize);
            const targetDiffPercent = (targetDiff / targetSize * 100).toFixed(1);
            const achieved = finalSize <= targetSize; // 严格要求：必须小于等于目标
            const closeEnough = finalSize <= targetSize * 1.05; // 5%容差

            console.log(`✅ Precise Compression Results:`);
            console.log(`   Final: ${(finalSize/1024/1024).toFixed(2)}MB (${(actualRatio*100).toFixed(1)}%)`);
            console.log(`   Target: ${(targetSize/1024/1024).toFixed(2)}MB (${(params.targetRatio*100).toFixed(1)}%)`);
            console.log(`   Adjusted Target: ${(originalSize * params.adjustedTargetRatio/1024/1024).toFixed(2)}MB`);
            console.log(`   Savings: ${savings}%`);
            console.log(`   Target Difference: ${finalSize > targetSize ? '+' : ''}${((finalSize - targetSize)/1024).toFixed(0)}KB`);

            let status;
            if (achieved) {
              status = '🎉 目标达成！';
            } else if (closeEnough) {
              status = '📏 接近目标';
            } else {
              status = '⚠️ 未达目标';
            }
            console.log(`   Status: ${status}`);

            responseCallback({ pdfDataURL: pdfDataURL, url: dataStruct.url });
          } catch (error) {
            console.error('❌ Error in postRun:', error);
            responseCallback({ error: `Ghostscript postRun error: ${error.message}` });
          }
        },
      ],
      arguments: [
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.4",
        `-dPDFSETTINGS=${params.pdfSettings}`,
        `-dColorImageResolution=${params.imageRes}`,
        `-dGrayImageResolution=${params.imageRes}`,
        `-dMonoImageResolution=${params.monoRes}`,
        "-dNOPAUSE",
        "-dQUIET",
        "-dBATCH",
        "-sOutputFile=output.pdf",
        "input.pdf",
      ],
      print: function (text) {
        console.log('📄 Ghostscript output:', text);
      },
      printErr: function (text) {
        console.error('🚨 Ghostscript error:', text);
      },
      totalDependencies: 0,
      noExitRuntime: 1
    };

    if (!self.Module) {
      self.Module = Module;
      loadScript();
    } else {
      self.Module["calledRun"] = false;
      self.Module["postRun"] = Module.postRun;
      self.Module["preRun"] = Module.preRun;
      self.Module.callMain();
    }
  };
  xhr.send();
}


self.addEventListener('message', function({data:e}) {
  console.log("📨 Worker received message:", e);

  // e.data contains the message sent to the worker.
  if (e.target !== 'wasm'){
    return;
  }

  console.log('🔧 Processing compression request:', e.data);

  _GSPS2PDF(e.data, (result) => {
    console.log('📤 Worker sending result:', result);

    if (result.error) {
      // 发送错误响应
      self.postMessage({ error: result.error });
    } else if (result.pdfDataURL) {
      // 发送成功响应
      self.postMessage({ pdfDataURL: result.pdfDataURL });
    } else {
      // 处理意外情况
      console.error('🚨 Unexpected result format:', result);
      self.postMessage({ error: 'Unexpected result format from compression' });
    }
  });
});

console.log("Worker ready")
