// ==UserScript==
// @name                esj隐藏侧边栏
// @name:zh-TW          esj隱藏側邊欄
// @name:zh-CN          esj隐藏侧边栏
// @namespace    maybeitsme
// @version      1.0
// @description  esjzone的正文查看时，侧边栏无法收起，这个脚本将其直接隐藏；方法是隐藏侧边栏col，然后使正文col占满宽度
// @match https://www.esjzone.one/forum/*
// @match https://www.esjzone.*/forum/*
// @grant        GM_addStyle
// @license             MIT
// ==/UserScript==

(function() {
    'use strict';

    //去除侧边栏
    // 使用CSS方式
    const style = document.createElement('style');
    style.textContent = `
        [class*="hidden-xs"][class*="hidden-sm"][class*="col-xl-3"][class*="col-lg-4"] {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    // 备用：直接操作DOM
    setTimeout(() => {
        const elements = document.querySelectorAll('div.hidden-xs.hidden-sm.col-xl-3.col-lg-4');
        elements.forEach(el => {
            el.style.display = 'none';
        });
    }, 1000);

    //将正文宽度设为屏幕宽度
    const targetElement = document.querySelector('div.col-xl-9.col-lg-8.p-r-30');

    if (targetElement) {
        // 移除栅格类，添加col-12（全宽度）
        targetElement.classList.remove('col-xl-9', 'col-lg-8');
        targetElement.classList.add('col-12');
    }
})();