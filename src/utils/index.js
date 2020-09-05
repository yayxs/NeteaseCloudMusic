/*
 * @Author: yayxs
 * @Date: 2020-09-02 23:37:52
 * @LastEditTime: 2020-09-05 20:26:30
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\utils\index.js
 * @
 */
export function getAudioSrc(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
export function formatPlayCount(playCount) {
  if (playCount < 0) return;
  if (playCount < 10000) {
    return playCount;
  } else if (Math.floor(playCount / 10000) < 10000) {
    return Math.floor(playCount / 1000) / 10 + "万";
  } else {
    return Math.floor(playCount / 10000000) / 10 + "亿";
  }
}
