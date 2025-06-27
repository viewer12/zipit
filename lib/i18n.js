// 多语言国际化配置
const i18n = {
  // 当前语言
  currentLanguage: 'zh-CN',
  
  // 支持的语言列表
  supportedLanguages: {
    'zh-CN': { name: '简体中文', nativeName: '简体中文', flag: '🇨🇳' },
    'zh-TW': { name: '繁體中文', nativeName: '繁體中文', flag: '🇭🇰' },
    'en': { name: 'English', nativeName: 'English', flag: '🇺🇸' },
    'ja': { name: '日本語', nativeName: '日本語', flag: '🇯🇵' }
  },

  // 翻译文本
  translations: {
    'zh-CN': {
      // 页面标题和描述
      'page.title': 'ZipIt - 智能PDF压缩工具',
      'page.description': '专业在线PDF压缩工具，精准控制目标文件大小，基于Ghostscript引擎，安全可靠无需上传',
      'page.keywords': 'PDF压缩,文件压缩,在线工具,Ghostscript,智能压缩,PDF优化',

      // 导航和头部
      'nav.title': 'ZipIt',
      'nav.subtitle': '智能PDF压缩工具',
      'nav.language': '语言',
      
      // 主要功能区
      'upload.title': '选择压缩类型',
      'upload.subtitle': '将文件拖拽到此处，或点击选择文件',
      'upload.supported': '支持 PDF 格式文件',
      'upload.imageSupported': '支持 JPG, PNG, WEBP 等图片格式',
      'upload.pdfSupported': '支持 PDF 文件',
      'upload.maxSize': '文件大小限制：50MB',
      'upload.button': '选择文件',
      'upload.imageType': '图片压缩',
      'upload.pdfType': 'PDF压缩',
      'upload.ariaLabel': '文件上传区域，支持点击选择或拖拽上传',
      
      // 压缩设置
      'settings.title': '压缩参数设置',
      'settings.targetSize': '目标文件大小',
      'settings.placeholder': '请输入目标大小',
      'settings.unit': '单位',
      'settings.quality': '压缩质量',
      'settings.quality.high': '高质量（文件较大）',
      'settings.quality.medium': '平衡质量（推荐）',
      'settings.quality.low': '高压缩（文件最小）',
      
      // 压缩按钮和状态
      'compress.start': '开始压缩',
      'compress.processing': '正在智能压缩中，请稍候...',
      'compress.complete': '🎉 压缩完成！',
      'compress.download': '下载压缩后的文件',
      'compress.retry': '重新压缩',
      'compress.newFile': '压缩其他文件',
      
      // 结果显示
      'result.original': '原始大小',
      'result.compressed': '压缩后',
      'result.savings': '节省',
      'result.ratio': '压缩比',
      'result.targetAchieved': '🎉 目标达成！',
      'result.targetMissed': '⚠️ 未达目标',
      'result.closeEnough': '接近目标',

      // 进度文本
      'progress.analyzing': '正在分析文件...',
      'progress.compressing': '正在压缩文件...',
      'progress.reading': '正在读取PDF...',
      'progress.ghostscript': '正在启动Ghostscript压缩引擎...',
      'progress.professional': '正在进行专业级PDF压缩...',
      'progress.processing': '正在处理压缩结果...',
      'progress.backup': '正在使用备用压缩方案...',
      'progress.targetAchieved': '🎉 目标达成! {size} (节省{savings}%)',
      'progress.completed': '压缩完成，节省{savings}% (目标{target}，实际{actual})',
      
      // 错误信息
      'error.fileTooBig': '文件过大，请选择小于50MB的PDF文件',
      'error.invalidFile': '文件格式不支持，请选择有效的PDF文件',
      'error.compressionFailed': '压缩处理失败，请检查文件后重试',
      'error.networkError': '网络连接异常，请检查网络后重试',
      
      // 帮助和说明
      'help.title': '使用说明',
      'help.step1': '1. 选择或拖拽PDF文件',
      'help.step2': '2. 设置目标压缩大小',
      'help.step3': '3. 点击开始压缩',
      'help.step4': '4. 下载压缩后的文件',
      
      // 页脚
      'footer.copyright': '© 2025 ZipIt. 所有文件处理均在浏览器本地完成，保护您的隐私安全。',
      'footer.privacy': '隐私政策',
      'footer.terms': '使用条款',
      'footer.contact': '联系我们'
    },

    'zh-TW': {
      // 頁面標題和描述
      'page.title': 'ZipIt - 智慧PDF壓縮工具',
      'page.description': '專業線上PDF壓縮工具，精準控制目標檔案大小，基於Ghostscript引擎，安全可靠毋須上傳',
      'page.keywords': 'PDF壓縮,檔案壓縮,線上工具,Ghostscript,智慧壓縮,PDF最佳化',

      // 導航和頭部
      'nav.title': 'ZipIt',
      'nav.subtitle': '智慧PDF壓縮工具',
      'nav.language': '語言',
      
      // 主要功能區
      'upload.title': '選擇壓縮類型',
      'upload.subtitle': '將檔案拖拽至此處，或點擊選擇檔案',
      'upload.supported': '支援 PDF 格式檔案',
      'upload.imageSupported': '支援 JPG, PNG, WEBP 等圖片格式',
      'upload.pdfSupported': '支援 PDF 檔案',
      'upload.maxSize': '檔案大小限制：50MB',
      'upload.button': '選擇檔案',
      'upload.imageType': '圖片壓縮',
      'upload.pdfType': 'PDF壓縮',
      'upload.ariaLabel': '檔案上傳區域，支援點擊選擇或拖拽上傳',
      
      // 壓縮設定
      'settings.title': '壓縮設定',
      'settings.targetSize': '目標檔案大小',
      'settings.placeholder': '輸入目標大小',
      'settings.unit': '單位',
      'settings.quality': '壓縮品質',
      'settings.quality.high': '高品質',
      'settings.quality.medium': '中等品質',
      'settings.quality.low': '高壓縮',
      
      // 壓縮按鈕和狀態
      'compress.start': '開始壓縮',
      'compress.processing': '正在壓縮...',
      'compress.complete': '壓縮完成！',
      'compress.download': '下載壓縮檔案',
      'compress.retry': '重新壓縮',
      'compress.newFile': '壓縮新檔案',
      
      // 結果顯示
      'result.original': '原始大小',
      'result.compressed': '壓縮後',
      'result.savings': '節省',
      'result.ratio': '壓縮比',
      'result.targetAchieved': '🎉 目標達成！',
      'result.targetMissed': '⚠️ 未達目標',
      'result.closeEnough': '接近目標',

      // 進度文字
      'progress.analyzing': '正在分析檔案...',
      'progress.compressing': '正在壓縮檔案...',
      'progress.reading': '正在讀取PDF...',
      'progress.ghostscript': '正在啟動Ghostscript壓縮引擎...',
      'progress.professional': '正在進行專業級PDF壓縮...',
      'progress.processing': '正在處理壓縮結果...',
      'progress.backup': '正在使用備用壓縮方案...',
      'progress.targetAchieved': '🎉 目標達成! {size} (節省{savings}%)',
      'progress.completed': '壓縮完成，節省{savings}% (目標{target}，實際{actual})',
      
      // 錯誤訊息
      'error.fileTooBig': '檔案太大，請選擇小於50MB的檔案',
      'error.invalidFile': '請選擇有效的PDF檔案',
      'error.compressionFailed': '壓縮失敗，請重試',
      'error.networkError': '網路錯誤，請檢查連線',
      
      // 幫助和說明
      'help.title': '使用說明',
      'help.step1': '1. 選擇或拖拽PDF檔案',
      'help.step2': '2. 設定目標壓縮大小',
      'help.step3': '3. 點擊開始壓縮',
      'help.step4': '4. 下載壓縮後的檔案',
      
      // 頁尾
      'footer.copyright': '© 2025 ZipIt. 所有檔案處理均在瀏覽器本地完成，保護您的隱私安全。',
      'footer.privacy': '隱私政策',
      'footer.terms': '使用條款',
      'footer.contact': '聯絡我們'
    },

    'en': {
      // Page title and description
      'page.title': 'ZipIt - Smart PDF Compression Tool',
      'page.description': 'Professional online PDF compressor with precise target size control. Powered by Ghostscript engine, secure and efficient - no upload required',
      'page.keywords': 'PDF compression,file compression,online tool,Ghostscript,smart compression,PDF optimizer',

      // Navigation and header
      'nav.title': 'ZipIt',
      'nav.subtitle': 'Smart PDF Compression Tool',
      'nav.language': 'Language',
      
      // Main function area
      'upload.title': 'Choose Compression Type',
      'upload.subtitle': 'Drop your files here, or click to browse',
      'upload.supported': 'Supports PDF format files',
      'upload.imageSupported': 'Supports JPG, PNG, WEBP and other image formats',
      'upload.pdfSupported': 'Supports PDF files',
      'upload.maxSize': 'File size limit: 50MB',
      'upload.button': 'Browse Files',
      'upload.imageType': 'Image Compression',
      'upload.pdfType': 'PDF Compression',
      'upload.ariaLabel': 'File upload area, supports click to select or drag and drop',
      
      // Compression settings
      'settings.title': 'Compression Settings',
      'settings.targetSize': 'Target File Size',
      'settings.placeholder': 'Enter target size',
      'settings.unit': 'Unit',
      'settings.quality': 'Compression Quality',
      'settings.quality.high': 'High Quality',
      'settings.quality.medium': 'Medium Quality',
      'settings.quality.low': 'High Compression',
      
      // Compression button and status
      'compress.start': 'Start Compression',
      'compress.processing': 'Smart compression in progress, please wait...',
      'compress.complete': '🎉 Compression Complete!',
      'compress.download': 'Download Compressed File',
      'compress.retry': 'Compress Again',
      'compress.newFile': 'Compress Another File',
      
      // Result display
      'result.original': 'Original Size',
      'result.compressed': 'Compressed',
      'result.savings': 'Saved',
      'result.ratio': 'Compression Ratio',
      'result.targetAchieved': '🎉 Target Achieved!',
      'result.targetMissed': '⚠️ Target Missed',
      'result.closeEnough': 'Close to Target',

      // Progress text
      'progress.analyzing': 'Analyzing file...',
      'progress.compressing': 'Compressing file...',
      'progress.reading': 'Reading PDF...',
      'progress.ghostscript': 'Starting Ghostscript compression engine...',
      'progress.professional': 'Performing professional PDF compression...',
      'progress.processing': 'Processing compression results...',
      'progress.backup': 'Using backup compression method...',
      'progress.targetAchieved': '🎉 Target achieved! {size} (saved {savings}%)',
      'progress.completed': 'Compression completed, saved {savings}% (target {target}, actual {actual})',
      
      // Error messages
      'error.fileTooBig': 'File too large, please select a file smaller than 50MB',
      'error.invalidFile': 'Please select a valid PDF file',
      'error.compressionFailed': 'Compression failed, please try again',
      'error.networkError': 'Network error, please check your connection',
      
      // Help and instructions
      'help.title': 'How to Use',
      'help.step1': '1. Select or drag PDF file',
      'help.step2': '2. Set target compression size',
      'help.step3': '3. Click start compression',
      'help.step4': '4. Download compressed file',
      
      // Footer
      'footer.copyright': '© 2025 ZipIt. All file processing is done locally in your browser, protecting your privacy and security.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.contact': 'Contact Us'
    },

    'ja': {
      // ページタイトルと説明
      'page.title': 'ZipIt - スマートPDF圧縮ツール',
      'page.description': 'Ghostscriptエンジン搭載のプロフェッショナルなオンラインPDF圧縮ツール。精密なファイルサイズ制御が可能で、安全・高速・アップロード不要',
      'page.keywords': 'PDF圧縮,ファイル圧縮,オンラインツール,Ghostscript,スマート圧縮,PDF最適化',

      // ナビゲーションとヘッダー
      'nav.title': 'ZipIt',
      'nav.subtitle': 'スマートPDF圧縮ツール',
      'nav.language': '言語',
      
      // メイン機能エリア
      'upload.title': '圧縮タイプを選択',
      'upload.subtitle': 'ファイルをここにドロップするか、クリックして選択してください',
      'upload.supported': 'PDF形式のファイルに対応',
      'upload.imageSupported': 'JPG、PNG、WEBP等の画像形式に対応',
      'upload.pdfSupported': 'PDFファイルに対応',
      'upload.maxSize': 'ファイルサイズ制限：50MB',
      'upload.button': 'ファイルを選択',
      'upload.imageType': '画像圧縮',
      'upload.pdfType': 'PDF圧縮',
      'upload.ariaLabel': 'ファイルアップロード領域、クリック選択またはドラッグ&ドロップに対応',
      
      // 圧縮設定
      'settings.title': '圧縮設定',
      'settings.targetSize': 'ターゲットファイルサイズ',
      'settings.placeholder': 'ターゲットサイズを入力',
      'settings.unit': '単位',
      'settings.quality': '圧縮品質',
      'settings.quality.high': '高品質',
      'settings.quality.medium': '中品質',
      'settings.quality.low': '高圧縮',
      
      // 圧縮ボタンとステータス
      'compress.start': '圧縮開始',
      'compress.processing': '圧縮中...',
      'compress.complete': '圧縮完了！',
      'compress.download': '圧縮ファイルをダウンロード',
      'compress.retry': '再圧縮',
      'compress.newFile': '新しいファイルを圧縮',
      
      // 結果表示
      'result.original': '元のサイズ',
      'result.compressed': '圧縮後',
      'result.savings': '節約',
      'result.ratio': '圧縮率',
      'result.targetAchieved': '🎉 ターゲット達成！',
      'result.targetMissed': '⚠️ ターゲット未達成',
      'result.closeEnough': 'ターゲットに近い',

      // 進捗テキスト
      'progress.analyzing': 'ファイルを分析中...',
      'progress.compressing': 'ファイルを圧縮中...',
      'progress.reading': 'PDFを読み込み中...',
      'progress.ghostscript': 'Ghostscript圧縮エンジンを起動中...',
      'progress.professional': 'プロフェッショナルPDF圧縮を実行中...',
      'progress.processing': '圧縮結果を処理中...',
      'progress.backup': 'バックアップ圧縮方法を使用中...',
      'progress.targetAchieved': '🎉 ターゲット達成! {size} ({savings}%節約)',
      'progress.completed': '圧縮完了、{savings}%節約 (ターゲット{target}、実際{actual})',
      
      // エラーメッセージ
      'error.fileTooBig': 'ファイルが大きすぎます。50MB未満のファイルを選択してください',
      'error.invalidFile': '有効なPDFファイルを選択してください',
      'error.compressionFailed': '圧縮に失敗しました。再試行してください',
      'error.networkError': 'ネットワークエラーです。接続を確認してください',
      
      // ヘルプと説明
      'help.title': '使用方法',
      'help.step1': '1. PDFファイルを選択またはドラッグ',
      'help.step2': '2. ターゲット圧縮サイズを設定',
      'help.step3': '3. 圧縮開始をクリック',
      'help.step4': '4. 圧縮されたファイルをダウンロード',
      
      // フッター
      'footer.copyright': '© 2025 ZipIt. すべてのファイル処理はブラウザ内でローカルに実行され、プライバシーとセキュリティを保護します。',
      'footer.privacy': 'プライバシーポリシー',
      'footer.terms': '利用規約',
      'footer.contact': 'お問い合わせ'
    }
  },

  // 获取翻译文本
  t(key, lang = null, params = {}) {
    const language = lang || this.currentLanguage;
    let text = this.translations[language]?.[key] || key;

    // 简单的字符串插值
    if (params && typeof params === 'object') {
      Object.keys(params).forEach(param => {
        text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
      });
    }

    return text;
  },

  // 设置语言
  setLanguage(lang) {
    if (this.supportedLanguages[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('zipit-language', lang);
      this.updatePageContent();
      this.updatePageMeta();
      this.updateLanguageSwitcher();
      return true;
    }
    return false;
  },

  // 获取保存的语言设置
  getSavedLanguage() {
    // 首先检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && this.supportedLanguages[urlLang]) {
      return urlLang;
    }

    // 然后检查localStorage
    const savedLang = localStorage.getItem('zipit-language');
    if (savedLang && this.supportedLanguages[savedLang]) {
      return savedLang;
    }

    // 最后使用浏览器检测
    return this.detectBrowserLanguage();
  },

  // 检测浏览器语言
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // 精确匹配
    if (this.supportedLanguages[browserLang]) {
      return browserLang;
    }
    
    // 语言代码匹配（如 zh-CN -> zh）
    const langCode = browserLang.split('-')[0];
    const matchedLang = Object.keys(this.supportedLanguages).find(lang => 
      lang.startsWith(langCode)
    );
    
    return matchedLang || 'en'; // 默认英文
  },

  // 更新页面内容
  updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);

      if (element.tagName === 'INPUT' && element.type === 'button') {
        element.value = translation;
      } else if (element.hasAttribute('placeholder')) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // 更新带有data-i18n-placeholder属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      element.placeholder = translation;
    });

    // 更新带有data-i18n-content属性的meta标签
    document.querySelectorAll('[data-i18n-content]').forEach(element => {
      const key = element.getAttribute('data-i18n-content');
      const translation = this.t(key);
      element.content = translation;
    });

    // 更新带有data-i18n-aria-label属性的元素
    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
      const key = element.getAttribute('data-i18n-aria-label');
      const translation = this.t(key);
      element.setAttribute('aria-label', translation);
    });

    // 更新HTML lang属性
    document.documentElement.lang = this.currentLanguage;
  },

  // 更新页面meta信息
  updatePageMeta() {
    document.title = this.t('page.title');
    
    // 更新meta描述
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = this.t('page.description');
    }
    
    // 更新meta关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.content = this.t('page.keywords');
    }
  },

  // 初始化
  init() {
    // 设置保存的语言
    const savedLang = this.getSavedLanguage();
    this.currentLanguage = savedLang;

    // 更新页面内容和meta信息
    this.updatePageContent();
    this.updatePageMeta();

    // 创建语言切换器（只创建一次）
    this.createLanguageSwitcher();
  },

  // 创建语言切换器
  createLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;

    // 清空现有内容，防止重复创建
    switcher.innerHTML = '';

    // 创建下拉按钮
    const button = document.createElement('button');
    button.className = 'bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-sm text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 flex items-center space-x-2 min-w-[140px] whitespace-nowrap';

    const currentLang = this.supportedLanguages[this.currentLanguage];
    button.innerHTML = `
      <span class="text-base flex-shrink-0">${currentLang.flag}</span>
      <span class="font-medium flex-shrink-0">${currentLang.nativeName}</span>
      <svg class="w-4 h-4 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    `;

    // 创建下拉菜单
    const dropdown = document.createElement('div');
    dropdown.className = 'absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[160px] z-50 hidden';

    Object.entries(this.supportedLanguages).forEach(([code, info]) => {
      const option = document.createElement('button');
      option.className = `w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3 whitespace-nowrap ${code === this.currentLanguage ? 'bg-blue-50 text-blue-600' : ''}`;
      option.innerHTML = `
        <span class="text-base flex-shrink-0">${info.flag}</span>
        <span class="font-medium flex-shrink-0">${info.nativeName}</span>
        ${code === this.currentLanguage ? '<svg class="w-4 h-4 ml-auto text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
      `;

      option.addEventListener('click', (e) => {
        e.preventDefault();
        this.setLanguage(code);
        dropdown.classList.add('hidden');
      });

      dropdown.appendChild(option);
    });

    // 切换下拉菜单显示
    button.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('hidden');
    });

    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    switcher.appendChild(button);
    switcher.appendChild(dropdown);
  },

  // 更新语言切换器显示
  updateLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;

    // 只更新按钮文本，不重新创建整个组件
    const button = switcher.querySelector('button');
    if (button) {
      const currentLang = this.supportedLanguages[this.currentLanguage];
      button.innerHTML = `
        <span class="text-base flex-shrink-0">${currentLang.flag}</span>
        <span class="font-medium flex-shrink-0">${currentLang.nativeName}</span>
        <svg class="w-4 h-4 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      `;

      // 更新下拉菜单中的选中状态
      const dropdown = switcher.querySelector('div');
      if (dropdown) {
        const options = dropdown.querySelectorAll('button');
        options.forEach((option, index) => {
          const code = Object.keys(this.supportedLanguages)[index];
          if (code === this.currentLanguage) {
            option.className = 'w-full text-left px-4 py-3 text-sm bg-blue-50 text-blue-600 hover:bg-gray-100 flex items-center space-x-3 whitespace-nowrap';
            const checkIcon = '<svg class="w-4 h-4 ml-auto text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
            if (!option.innerHTML.includes('svg')) {
              option.innerHTML += checkIcon;
            }
          } else {
            option.className = 'w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3 whitespace-nowrap';
            // 移除选中图标
            const svg = option.querySelector('svg');
            if (svg) svg.remove();
          }
        });
      }
    }
  }
};

// 导出供全局使用
window.i18n = i18n;
