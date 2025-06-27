// 多语言国际化配置
const i18n = {
  // 当前语言
  currentLanguage: 'zh-CN',
  
  // 支持的语言列表
  supportedLanguages: {
    'zh-CN': { name: '简体中文', flag: '🇨🇳' },
    'zh-TW': { name: '繁體中文', flag: '🇹🇼' },
    'en': { name: 'English', flag: '🇺🇸' },
    'ja': { name: '日本語', flag: '🇯🇵' }
  },

  // 翻译文本
  translations: {
    'zh-CN': {
      // 页面标题和描述
      'page.title': 'ZipIt - 智能文件压缩工具',
      'page.description': '专业的在线PDF压缩工具，支持精确目标大小控制，基于Ghostscript引擎，安全高效',
      'page.keywords': 'PDF压缩,文件压缩,在线工具,Ghostscript,智能压缩',
      
      // 导航和头部
      'nav.title': 'ZipIt',
      'nav.subtitle': '智能文件压缩工具',
      'nav.language': '语言',
      
      // 主要功能区
      'upload.title': '选择压缩类型',
      'upload.subtitle': '拖拽文件到此处或点击选择',
      'upload.supported': '支持 PDF 文件',
      'upload.maxSize': '最大文件大小: 50MB',
      'upload.button': '选择文件',
      'upload.imageType': '图片压缩',
      'upload.pdfType': 'PDF压缩',
      'upload.ariaLabel': '上传文件区域，点击或拖拽文件到此处',
      
      // 压缩设置
      'settings.title': '压缩设置',
      'settings.targetSize': '目标文件大小',
      'settings.placeholder': '输入目标大小',
      'settings.unit': '单位',
      'settings.quality': '压缩质量',
      'settings.quality.high': '高质量',
      'settings.quality.medium': '中等质量',
      'settings.quality.low': '高压缩',
      
      // 压缩按钮和状态
      'compress.start': '开始压缩',
      'compress.processing': '正在压缩...',
      'compress.complete': '压缩完成！',
      'compress.download': '下载压缩文件',
      'compress.retry': '重新压缩',
      'compress.newFile': '压缩新文件',
      
      // 结果显示
      'result.original': '原始大小',
      'result.compressed': '压缩后',
      'result.savings': '节省',
      'result.ratio': '压缩比',
      'result.targetAchieved': '目标达成！',
      'result.targetMissed': '未达目标',
      'result.closeEnough': '接近目标',
      
      // 错误信息
      'error.fileTooBig': '文件太大，请选择小于50MB的文件',
      'error.invalidFile': '请选择有效的PDF文件',
      'error.compressionFailed': '压缩失败，请重试',
      'error.networkError': '网络错误，请检查连接',
      
      // 帮助和说明
      'help.title': '使用说明',
      'help.step1': '1. 选择或拖拽PDF文件',
      'help.step2': '2. 设置目标压缩大小',
      'help.step3': '3. 点击开始压缩',
      'help.step4': '4. 下载压缩后的文件',
      
      // 页脚
      'footer.copyright': '© 2025 ZipIt. 保留所有权利。',
      'footer.privacy': '隐私政策',
      'footer.terms': '使用条款',
      'footer.contact': '联系我们'
    },

    'zh-TW': {
      // 页面标题和描述
      'page.title': 'ZipIt - 智慧檔案壓縮工具',
      'page.description': '專業的線上PDF壓縮工具，支援精確目標大小控制，基於Ghostscript引擎，安全高效',
      'page.keywords': 'PDF壓縮,檔案壓縮,線上工具,Ghostscript,智慧壓縮',
      
      // 導航和頭部
      'nav.title': 'ZipIt',
      'nav.subtitle': '智慧檔案壓縮工具',
      'nav.language': '語言',
      
      // 主要功能區
      'upload.title': '選擇壓縮類型',
      'upload.subtitle': '拖拽檔案到此處或點擊選擇',
      'upload.supported': '支援 PDF 檔案',
      'upload.maxSize': '最大檔案大小: 50MB',
      'upload.button': '選擇檔案',
      'upload.imageType': '圖片壓縮',
      'upload.pdfType': 'PDF壓縮',
      'upload.ariaLabel': '上傳檔案區域，點擊或拖拽檔案到此處',
      
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
      'result.targetAchieved': '目標達成！',
      'result.targetMissed': '未達目標',
      'result.closeEnough': '接近目標',
      
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
      'footer.copyright': '© 2025 ZipIt. 保留所有權利。',
      'footer.privacy': '隱私政策',
      'footer.terms': '使用條款',
      'footer.contact': '聯絡我們'
    },

    'en': {
      // Page title and description
      'page.title': 'ZipIt - Smart File Compression Tool',
      'page.description': 'Professional online PDF compression tool with precise target size control, powered by Ghostscript engine, secure and efficient',
      'page.keywords': 'PDF compression,file compression,online tool,Ghostscript,smart compression',
      
      // Navigation and header
      'nav.title': 'ZipIt',
      'nav.subtitle': 'Smart File Compression Tool',
      'nav.language': 'Language',
      
      // Main function area
      'upload.title': 'Select Compression Type',
      'upload.subtitle': 'Drag files here or click to select',
      'upload.supported': 'Supports PDF files',
      'upload.maxSize': 'Max file size: 50MB',
      'upload.button': 'Select File',
      'upload.imageType': 'Image Compression',
      'upload.pdfType': 'PDF Compression',
      'upload.ariaLabel': 'File upload area, click or drag files here',
      
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
      'compress.processing': 'Compressing...',
      'compress.complete': 'Compression Complete!',
      'compress.download': 'Download Compressed File',
      'compress.retry': 'Retry Compression',
      'compress.newFile': 'Compress New File',
      
      // Result display
      'result.original': 'Original Size',
      'result.compressed': 'Compressed',
      'result.savings': 'Saved',
      'result.ratio': 'Compression Ratio',
      'result.targetAchieved': 'Target Achieved!',
      'result.targetMissed': 'Target Missed',
      'result.closeEnough': 'Close to Target',
      
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
      'footer.copyright': '© 2025 ZipIt. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.contact': 'Contact Us'
    },

    'ja': {
      // ページタイトルと説明
      'page.title': 'ZipIt - スマートファイル圧縮ツール',
      'page.description': 'Ghostscriptエンジンを搭載した、精密なターゲットサイズ制御が可能なプロフェッショナルなオンラインPDF圧縮ツール',
      'page.keywords': 'PDF圧縮,ファイル圧縮,オンラインツール,Ghostscript,スマート圧縮',
      
      // ナビゲーションとヘッダー
      'nav.title': 'ZipIt',
      'nav.subtitle': 'スマートファイル圧縮ツール',
      'nav.language': '言語',
      
      // メイン機能エリア
      'upload.title': '圧縮タイプを選択',
      'upload.subtitle': 'ファイルをここにドラッグするかクリックして選択',
      'upload.supported': 'PDFファイルをサポート',
      'upload.maxSize': '最大ファイルサイズ: 50MB',
      'upload.button': 'ファイルを選択',
      'upload.imageType': '画像圧縮',
      'upload.pdfType': 'PDF圧縮',
      'upload.ariaLabel': 'ファイルアップロード領域、クリックまたはファイルをここにドラッグ',
      
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
      'result.targetAchieved': 'ターゲット達成！',
      'result.targetMissed': 'ターゲット未達成',
      'result.closeEnough': 'ターゲットに近い',
      
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
      'footer.copyright': '© 2025 ZipIt. 全著作権所有。',
      'footer.privacy': 'プライバシーポリシー',
      'footer.terms': '利用規約',
      'footer.contact': 'お問い合わせ'
    }
  },

  // 获取翻译文本
  t(key, lang = null) {
    const language = lang || this.currentLanguage;
    return this.translations[language]?.[key] || key;
  },

  // 设置语言
  setLanguage(lang) {
    if (this.supportedLanguages[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('zipit-language', lang);
      this.updatePageContent();
      this.updatePageMeta();
      return true;
    }
    return false;
  },

  // 获取保存的语言设置
  getSavedLanguage() {
    return localStorage.getItem('zipit-language') || this.detectBrowserLanguage();
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
    this.setLanguage(savedLang);
    
    // 创建语言切换器
    this.createLanguageSwitcher();
  },

  // 创建语言切换器
  createLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;
    
    const select = document.createElement('select');
    select.className = 'bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
    
    Object.entries(this.supportedLanguages).forEach(([code, info]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${info.flag} ${info.name}`;
      option.selected = code === this.currentLanguage;
      select.appendChild(option);
    });
    
    select.addEventListener('change', (e) => {
      this.setLanguage(e.target.value);
    });
    
    switcher.appendChild(select);
  }
};

// 导出供全局使用
window.i18n = i18n;
