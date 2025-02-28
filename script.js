document.addEventListener('DOMContentLoaded', function() {
    // Website data
    const websites = [
        // AI搜索
        {
            name: "Google",
            url: "https://www.google.com",
            icon: "fa-brands fa-google",
            category: "ai-search"
        },
        {
            name: "Bing",
            url: "https://www.bing.com",
            icon: "fa-brands fa-microsoft",
            category: "ai-search"
        },
        {
            name: "websim",
            url: "https://websim.ai/",
            icon: "fa-solid fa-magnifying-glass",
            category: "ai-search"
        },
        {
            name: "ChatGPT",
            url: "https://chatgpt.com/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "傻豆包",
            url: "https://www.doubao.com/chat/",
            icon: "fa-solid fa-paw",
            category: "ai-search"
        },
        {
            name: "通义千问",
            url: "https://chat.qwenlm.ai/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "kimi",
            url: "https://kimi.moonshot.cn/",
            icon: "fa-regular fa-moon",
            category: "ai-search"
        },
        {
            name: "傻元宝",
            url: "https://yuanbao.tencent.com/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "google AIstudio",
            url: "https://aistudio.google.com/",
            icon: "fa-brands fa-google",
            category: "ai-search"
        },
        {
            name: "claude",
            url: "https://claude.ai/",
            icon: "fa-solid fa-brain",
            category: "ai-search"
        },
        {
            name: "ChandlerAi",
            url: "https://chandler.bet/",
            icon: "fa-solid fa-microchip",
            category: "ai-search"
        },
        {
            name: "mistral",
            url: "https://mistral.ai/",
            icon: "fa-solid fa-brain",
            category: "ai-search"
        },
        {
            name: "groq",
            url: "https://groq.com/",
            icon: "fa-solid fa-group-arrows-rotate",
            category: "ai-search"
        },
        {
            name: "medscape",
            url: "https://www.medscape.com/",
            icon: "fa-solid fa-stethoscope",
            category: "ai-search"
        },
        {
            name: "heck.ai",
            url: "https://heck.ai/",
            icon: "fa-solid fa-wand-magic-sparkles",
            category: "ai-search"
        },
        {
            name: "问小白",
            url: "https://www.wenxiaobai.com/",
            icon: "fa-solid fa-mask",
            category: "ai-search"
        },
        {
            name: "leonardo.ai绘图",
            url: "https://app.leonardo.ai/",
            icon: "fa-regular fa-images",
            category: "ai-search"
        },
        {
            name: "huggingface",
            url: "https://huggingface.co/",
            icon: "fa-solid fa-face-rolling-eyes",
            category: "ai-search"
        },
        {
            name: "x.ai",
            url: "https://x.ai/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "pce计算",
            url: "https://ascvdpce.186404.xyz/",
            icon: "fa-solid fa-heart-pulse",
            category: "ai-search"
        },
        {
            name: "deepseek",
            url: "https://www.deepseek.com/",
            icon: "fa-solid fa-magnifying-glass-chart",
            category: "ai-search"
        },
        {
            name: "beago.ai",
            url: "https://www.beago.ai/",
            icon: "fa-solid fa-lightbulb",
            category: "ai-search"
        },
        {
            name: "sigmachat",
            url: "https://sigmabrowser.com/chat",
            icon: "fa-solid fa-comments",
            category: "ai-search"
        },
        {
            name: "bolt.new",
            url: "https://bolt.new/",
            icon: "fa-solid fa-bolt",
            category: "ai-search"
        },
        {
            name: "lmarena",
            url: "https://lmarena.ai/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "kelaode",
            url: "https://kelaode.ai/",
            icon: "fa-solid fa-message",
            category: "ai-search"
        },

        // 社交媒体
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: "fa-brands fa-facebook",
            category: "social"
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: "fa-brands fa-twitter",
            category: "social"
        },
        {
            name: "推特视频下载",
            url: "https://twitterxz.com/",
            icon: "fa-solid fa-video",
            category: "social"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: "fa-brands fa-instagram",
            category: "social"
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com",
            icon: "fa-brands fa-tiktok",
            category: "social"
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            icon: "fa-brands fa-reddit",
            category: "social"
        },
        {
            name: "GitHub",
            url: "https://github.com/",
            icon: "fa-brands fa-github",
            category: "social"
        },

        // 科技资讯
        {
            name: "TechCrunch",
            url: "https://www.techcrunch.com",
            icon: "fa-solid fa-newspaper",
            category: "tech-news"
        },
        {
            name: "Wired",
            url: "https://www.wired.com",
            icon: "fa-solid fa-bolt",
            category: "tech-news"
        },
        {
            name: "The Verge",
            url: "https://www.theverge.com",
            icon: "fa-solid fa-laptop",
            category: "tech-news"
        },
        {
            name: "cnbeta",
            url: "https://www.cnbeta.com.tw/",
            icon: "fa-solid fa-circle-info",
            category: "tech-news"
        },
        {
            name: "Ars Technica",
            url: "https://arstechnica.com",
            icon: "fa-solid fa-rocket",
            category: "tech-news"
        },
        {
            name: "Engadget",
            url: "https://www.engadget.com",
            icon: "fa-solid fa-mobile-screen",
            category: "tech-news"
        },
        {
            name: "TechRadar",
            url: "https://techradar.com",
            icon: "fa-solid fa-satellite",
            category: "tech-news"
        },
        {
            name: "科技博客",
            url: "https://b.186404.xyz/",
            icon: "fa-solid fa-blog",
            category: "tech-news"
        },

        // 云存储
        {
            name: "Dropbox",
            url: "https://www.dropbox.com",
            icon: "fa-brands fa-dropbox",
            category: "cloud-storage"
        },
        {
            name: "Google Drive",
            url: "https://drive.google.com",
            icon: "fa-brands fa-google-drive",
            category: "cloud-storage"
        },
        {
            name: "OneDrive",
            url: "https://onedrive.live.com",
            icon: "fa-brands fa-microsoft",
            category: "cloud-storage"
        },
        {
            name: "Box",
            url: "https://www.box.com",
            icon: "fa-solid fa-box",
            category: "cloud-storage"
        },
        {
            name: "MediaFire",
            url: "https://www.mediafire.com",
            icon: "fa-solid fa-file",
            category: "cloud-storage"
        },
        {
            name: "MEGA",
            url: "https://mega.nz",
            icon: "fa-solid fa-cloud-arrow-up",
            category: "cloud-storage"
        },
        {
            name: "PikPak",
            url: "https://mypikpak.com/",
            icon: "fa-solid fa-cloud",
            category: "cloud-storage"
        },

        // 开发工具
        {
            name: "render",
            url: "https://render.com/",
            icon: "fa-solid fa-draw-polygon",
            category: "dev-tools"
        },
        {
            name: "deno",
            url: "https://deno.com/deploy",
            icon: "fa-solid fa-d",
            category: "dev-tools"
        },
        {
            name: "railway",
            url: "https://railway.com/",
            icon: "fa-solid fa-archway",
            category: "dev-tools"
        },
        {
            name: "vercel",
            url: "https://vercel.com/",
            icon: "fa-solid fa-v",
            category: "dev-tools"
        },
        {
            name: "netlify",
            url: "https://www.netlify.com/",
            icon: "fa-brands fa-n",
            category: "dev-tools"
        },

        // 实用工具
        {
            name: "Google翻译",
            url: "https://translate.google.com",
            icon: "fa-solid fa-language",
            category: "tools"
        },
        {
            name: "短链",
            url: "https://d.186404.xyz/",
            icon: "fa-solid fa-link",
            category: "tools"
        },
        {
            name: "网速测试",
            url: "https://www.speedtest.net/",
            icon: "fa-solid fa-gauge-high",
            category: "tools"
        },
        {
            name: "Cloudns",
            url: "https://www.cloudns.net/",
            icon: "fa-solid fa-cloud",
            category: "tools"
        },
        {
            name: "Cloudflare",
            url: "https://www.cloudflare.com/zh-cn/",
            icon: "fa-solid fa-shield-halved",
            category: "tools"
        },
        {
            name: "临时邮箱",
            url: "https://email.ml/",
            icon: "fa-solid fa-envelope",
            category: "tools"
        },
        {
            name: "IP查询",
            url: "https://ip.sb/",
            icon: "fa-solid fa-location-dot",
            category: "tools"
        },
        {
            name: "FontAwesome图标",
            url: "https://fontawesome.com/",
            icon: "fa-solid fa-icons",
            category: "tools"
        },
        {
            name: "test-ipv6",
            url: "https://test-ipv6.com/",
            icon: "fa-solid fa-ethernet",
            category: "tools"
        },
        {
            name: "zone/ip",
            url: "https://html.zone/ip",
            icon: "fa-brands fa-sourcetree",
            category: "tools"
        },
        {
            name: "免费网络代理",
            url: "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/",
            icon: "fa-brands fa-internet-explorer",
            category: "tools"
        },
        {
            name: "ipcheck",
            url: "https://ipcheck.ing/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "定时任务cron-job",
            url: "https://console.cron-job.org/",
            icon: "fa-solid fa-clock-rotate-left",
            category: "tools"
        },
        {
            name: "uptimerobot",
            url: "https://uptimerobot.com/",
            icon: "fa-solid fa-clock-rotate-left",
            category: "tools"
        },
        {
            name: "forwardemail",
            url: "https://forwardemail.net/",
            icon: "fa-solid fa-envelopes-bulk",
            category: "tools"
        },
        {
            name: "github文件加速",
            url: "https://gb.w404.nyc.mn/",
            icon: "fa-brands fa-github",
            category: "tools"
        },
        {
            name: "hostryDNS域名托管",
            url: "https://hostry.com/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "free-proxy",
            url: "http://free-proxy.cz/en/",
            icon: "fa-brands fa-internet-explorer",
            category: "tools"
        },
        {
            name: "在线代理croxyproxy",
            url: "https://www.croxyproxy.rocks/_zh/",
            icon: "fa-brands fa-internet-explorer",
            category: "tools"
        },
        {
            name: "微信Markdown编辑器",
            url: "https://doocs.github.io/md/",
            icon: "fa-regular fa-edit",
            category: "tools"
        },
        {
            name: "proxysite",
            url: "https://www.proxysite.com/",
            icon: "fa-brands fa-internet-explorer",
            category: "tools"
        },
        {
            name: "serv00",
            url: "https://www.serv00.com/",
            icon: "fa-solid fa-server",
            category: "tools"
        },
        {
            name: "PicGo",
            url: "https://github.com/Molunerfinn/PicGo",
            icon: "fa-solid fa-cloud-arrow-up",
            category: "tools"
        },
        {
            name: "SM.MS",
            url: "https://smms.app/",
            icon: "fa-solid fa-image",
            category: "tools"
        },
        {
            name: "FreeImageHost",
            url: "https://freeimage.host/",
            icon: "fa-solid fa-photo-film",
            category: "tools"
        },
        {
            name: "cobalt视频下载",
            url: "https://cobalt.tools/",
            icon: "fa-brands fa-youtube",
            category: "tools"
        },
        {
            name: "remove.bg",
            url: "https://www.remove.bg/",
            icon: "fa-solid fa-image-portrait",
            category: "tools"
        },
        {
            name: "picwish",
            url: "https://picwish.com/",
            icon: "fa-regular fa-image",
            category: "tools"
        },
        {
            name: "腾讯智影",
            url: "https://zenvideo.qq.com/",
            icon: "fa-solid fa-video",
            category: "tools"
        },
        {
            name: "tinywow",
            url: "https://tinywow.com/",
            icon: "fa-brands fa-free-code-camp",
            category: "tools"
        },
        {
            name: "付费墙",
            url: "https://paywallbuster.com/",
            icon: "fa-solid fa-key",
            category: "tools"
        },
        {
            name: "PaywallHub",
            url: "https://g.186404.xyz/wallHub/",
            icon: "fa-solid fa-unlock",
            category: "tools"
        },
        {
            name: "fmhy",
            url: "https://fmhy.net/",
            icon: "fa-regular fa-folder-open",
            category: "tools"
        },
        {
            name: "PDF在线工具",
            url: "https://tools.pdf24.org/",
            icon: "fa-solid fa-file-pdf",
            category: "tools"
        },
        {
            name: "pixabay",
            url: "https://pixabay.com/",
            icon: "fa-brands fa-pix",
            category: "tools"
        },
        {
            name: "InfinityFree",
            url: "https://www.infinityfree.com/",
            icon: "fa-solid fa-infinity",
            category: "tools"
        },
        {
            name: "anyvoice",
            url: "https://anyvoice.net/",
            icon: "fa-solid fa-microphone",
            category: "tools"
        },
        {
            name: "HiDNS免费域名",
            url: "https://www.hidoha.net/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "L53免费域名",
            url: "https://customer.l53.net/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },

        // 实用工具补充
        {
            name: "一个朋友",
            url: "https://ygpy.net/",
            icon: "fa-solid fa-user-group",
            category: "tools"
        },
        {
            name: "谷歌笔记",
            url: "https://notebooklm.google/",
            icon: "fa-solid fa-book",
            category: "tools"
        },
        {
            name: "A姐",
            url: "https://www.ahhhhfs.com/",
            icon: "fa-solid fa-blog",
            category: "tools"
        },
        {
            name: "dns.he.net",
            url: "https://dns.he.net/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "ip清洁度查询",
            url: "https://scamalytics.com/",
            icon: "fa-solid fa-icons",
            category: "tools"
        },
        {
            name: "dnsexit",
            url: "https://dnsexit.com/",
            icon: "fa-solid fa-users",
            category: "tools"
        },
        {
            name: "Site域名转发",
            url: "https://www.site.ac/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "油管字幕下载",
            url: "https://www.downloadyoutubesubtitles.com/",
            icon: "fa-brands fa-youtube",
            category: "tools"
        },
        {
            name: "油管视频下载",
            url: "https://youtube.iiilab.com/",
            icon: "fa-solid fa-download",
            category: "tools"
        },
        {
            name: "电影导航",
            url: "https://mv.186404.xyz/",
            icon: "fa-solid fa-tv",
            category: "tools"
        },
        {
            name: "cursor编辑器",
            url: "https://www.cursor.com/",
            icon: "fa-solid fa-i-cursor",
            category: "tools"
        },
        {
            name: "dynv6",
            url: "https://dynv6.com/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "improvmx",
            url: "https://improvmx.com/",
            icon: "fa-solid fa-envelopes-bulk",
            category: "tools"
        },
        {
            name: "Z-Library",
            url: "https://zh.go-to-library.sk/",
            icon: "fa-solid fa-book-reader",
            category: "tools"
        },
        {
            name: "us.kg域名",
            url: "https://nic.us.kg/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "Spaceship廉价域名",
            url: "https://www.spaceship.com/zh/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },

        // 电子邮箱
        {
            name: "Gmail",
            url: "https://mail.google.com",
            icon: "fa-solid fa-envelope",
            category: "email"
        },
        {
            name: "Outlook",
            url: "https://outlook.live.com",
            icon: "fa-brands fa-microsoft",
            category: "email"
        },
        {
            name: "ProtonMail",
            url: "https://proton.me/mail",
            icon: "fa-solid fa-shield-halved",
            category: "email"
        },
        {
            name: "cock邮箱",
            url: "https://cock.li/",
            icon: "fa-solid fa-envelope-open",
            category: "email"
        },
        {
            name: "disroot邮箱",
            url: "https://disroot.org/",
            icon: "fa-solid fa-envelope-circle-check",
            category: "email"
        },
        {
            name: "QQ邮箱",
            url: "https://mail.qq.com",
            icon: "fa-brands fa-qq",
            category: "email"
        },
        {
            name: "librem邮箱",
            url: "https://librem.one/",
            icon: "fa-solid fa-at",
            category: "email"
        },
        {
            name: "临时谷歌邮箱",
            url: "https://www.linshigmail.com/",
            icon: "fa-solid fa-envelopes-bulk",
            category: "email"
        }
    ];

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const sitesContainer = document.getElementById('sites-container');

    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');

    // Category tabs
    const categoryTabs = document.querySelectorAll('.tab');
    // 修改默认分类为 'ai-search'
    let currentCategory = 'ai-search';

    // 检查是否存在网站计数和排序元素
    const sitesCountNumber = document.getElementById('sites-count-number');
    const sortSelect = document.getElementById('sort-select');
    
    // Filter and display websites
    // 移除对网站计数和排序的处理
    function filterWebsites(category = 'ai-search', searchTerm = '') {
        // 添加加载动画
        sitesContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
        
        // 模拟短暂延迟以显示加载效果
        setTimeout(() => {
            sitesContainer.innerHTML = '';
            const filteredSites = websites.filter(site => {
                const matchesCategory = site.category === category;
                const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                     site.url.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
            });
    
            // 如果没有搜索结果，显示提示信息
            if (filteredSites.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.textContent = '没有找到匹配的网站';
                sitesContainer.appendChild(noResults);
                return;
            }
    
            // 排序网站（如果排序选择器存在）
            if (sortSelect) {
                const sortValue = sortSelect.value;
                if (sortValue === 'name-asc') {
                    filteredSites.sort((a, b) => a.name.localeCompare(b.name));
                } else if (sortValue === 'name-desc') {
                    filteredSites.sort((a, b) => b.name.localeCompare(a.name));
                }
            }
    
            // 显示搜索结果
            filteredSites.forEach(site => {
                const card = document.createElement('div');
                card.className = 'site-card';
                card.innerHTML = `
                    <a href="${site.url}" target="_blank"></a>
                    <i class="${site.icon}"></i>
                    <h3>${site.name}</h3>
                `;
                sitesContainer.appendChild(card);
            });
        }, 300); // 300ms 的加载动画
    }

    // Initialize with 'ai-search' category
    filterWebsites(currentCategory);

    // Event listeners
    searchInput.addEventListener('input', () => {
        filterWebsites(currentCategory, searchInput.value);
    });

    searchBtn.addEventListener('click', () => {
        filterWebsites(currentCategory, searchInput.value);
    });

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            filterWebsites(currentCategory, searchInput.value);
        });
    });

    // 添加排序事件监听器（如果排序选择器存在）
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            filterWebsites(currentCategory, searchInput.value);
        });
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeIcon.classList.toggle('fa-sun');
        themeIcon.classList.toggle('fa-moon');
    });
});