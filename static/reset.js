/**
 * Created by renyu on 2017-07-10.
 */
;
(function(win) {
  let doc = win.document;
  let docEl = doc.documentElement;
  let tid;

  function refreshRem() {
    let width = docEl.getBoundingClientRect().width;
    if (width > 640) { // 最大宽度
      width = 640;
    }
    let rem = width / 36;
    docEl.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  refreshRem();

})(window);
