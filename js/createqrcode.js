function createQrcode(opts) {
  var defaults = {
      id: "login_container",
      appid: "wxcef14f86471120d9",
      scope: "snsapi_login",
      url: ""
    },
    settings = $.extend({}, defaults, opts);

  this.opts = settings;
}

createQrcode.prototype = {
  init: function() {
    var self = this,
      _opts = self.opts,
      _id = _opts.id,
      _width = _opts.width,
      _height = _opts.height,
      _hasId = $('body').find('#'+_id + '_wrap').length,
      _temp = '';

    if(!_hasId) {
      _temp = '<div id="' + _id + '_wrap" style="position:fixed;top:'+_opts.top+';left:'+_opts.left+';z-index:1050;display:none;text-align:center;"><div id="' + _id + '"';
      _temp += 'style="';
      _temp += _opts.bg ? 'background:' + _opts.bg + ';' : '';
      _temp += _opts.width ? 'width:' + _opts.width + ';' : '';
      _temp += _opts.height ? 'height:' + _opts.height + ';' : '';
      _temp += '"></div><span class="qrcode-colse" style="position:absolute;z-index:1050;top:0;right:0;color:' + _opts.closeColor + ';font-size:30px;padding: 0 10px;">&times;</span></div>'

      $('body').append(_temp);
    }

    new WxLogin(_opts);

    parseInt(_width) < 300 && $('#' + _id + ' iframe').attr('width', _width);
    parseInt(_height) > 400 && $('#' + _id + ' iframe').attr('height', _height);

    $('#' + _id + '_wrap').fadeIn(300);
    self._initEvent();
  },
  _initEvent: function() {
    var self = this,
      opts = self.opts,
      pId = opts.id + '_wrap',
      $qrcode = $('#' + pId);

    $qrcode.find('.qrcode-colse').on('click', function() {
      $qrcode.hide();
    })
  }
};
