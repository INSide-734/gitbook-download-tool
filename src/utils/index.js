import { ensureDir, writeFile as _writeFile } from 'fs-extra';
import path from 'path';

/**
 * 转义正则表达式特殊字符
 * @param {string} string 需要转义的字符串
 * @returns {string} 转义后的字符串
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 确保目录存在
 * @param {string} dir 目录路径
 */
async function ensureDirectory(dir) {
    await ensureDir(dir);
}

/**
 * 写入文件
 * @param {string} filePath 文件路径
 * @param {string} content 文件内容
 */
async function writeFile(filePath, content) {
    await _writeFile(filePath, content, 'utf8');
}

export default {
    escapeRegExp,
    ensureDirectory,
    writeFile
};