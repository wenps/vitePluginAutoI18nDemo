/*
 * @Author: xiaoshanwen
 * @Date: 2023-10-12 13:08:36
 * @LastEditTime: 2023-11-27 09:57:57
 * @FilePath: /vitePluginAutoI18nDemo/example/vue3/src/lang/index.js
 */
import '../../lang/index'
import langJSON from '../../lang/index.json'
const langMap = {
    en: window?.lang?.en || _getJSONKey('en', langJSON),
    zhcn: window?.lang?.zhcn || _getJSONKey('zhcn', langJSON),
    ko: window?.lang?.ko || _getJSONKey('ko', langJSON),
    ja: window?.lang?.ja || _getJSONKey('ja', langJSON),
    zhtw: window?.lang?.zhtw || _getJSONKey('zh-tw', langJSON),
}
const lang = window.localStorage.getItem('lang') || 'zhcn'
window.$t.locale(langMap[lang], 'lang')