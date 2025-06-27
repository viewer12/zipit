export async function _GSPS2PDF( dataStruct,
                                responseCallback,
                                progressCallback,
                                statusUpdateCallback){
  const worker = new Worker(
    new URL('./background-worker.js', import.meta.url),
    {type: 'module'}
  );
  worker.postMessage({ data: dataStruct, target: 'wasm'});
  return new Promise((resolve, reject)=>{
    const listener = (e) => {
      // 检查是否有错误
      if (e.data && e.data.error) {
        console.error('🚨 Worker returned error:', e.data.error);
        reject(new Error(e.data.error));
      } else if (e.data && e.data.pdfDataURL) {
        console.log('✅ Worker returned success:', e.data.pdfDataURL);
        resolve(e.data.pdfDataURL);
      } else {
        console.error('🚨 Unexpected worker response:', e.data);
        reject(new Error('Unexpected worker response format'));
      }

      worker.removeEventListener('message', listener);
      worker.removeEventListener('error', errorListener);
      setTimeout(()=> worker.terminate(), 0);
    };

    const errorListener = (error) => {
      console.error('🚨 Worker error event:', error);
      reject(new Error(`Worker error: ${error.message || 'Unknown worker error'}`));
      worker.removeEventListener('message', listener);
      worker.removeEventListener('error', errorListener);
      setTimeout(()=> worker.terminate(), 0);
    };

    worker.addEventListener('message', listener);
    worker.addEventListener('error', errorListener);
  })

}
