/*prepare to start*/
!(function($) {

	//状态值里面，0代表X, 1代表对号，2代表圈目前只有三种状态。
	function owpgr(d) {
		this.data = d.data;
		this.conf = d.conf || ["userid", "approvestatus", "approvetime"];
		this.init();
		return this.$el;
	}

	owpgr.prototype = {
		init: function() {
			this.$el = $('<div class="owpgr-wrapper"></div>').append(this.create().join(""));
			this.create();
		},

		create: function() {
			var sb = ['<table cellspacing="0" cellpadding="0"><tbody>'];
			var lth = this.data.length;
			for (var i = 0; i < 3; i++) {
				var txt = this.conf[i];
				sb.push('<tr class="r-owpgr-' + i + '">');
				for (var j = 0; j < lth; j++) {
					var item = this.data[j];
					if (i != 1) sb.push('<td><span>' + item[txt] + '</span></td>');
					else {
						sb.push([
							'<td class="owpgr-img-cell',
							j == 0 ? " owpgr-img-cell-1st" : "",
							j == lth - 1 ? " owpgr-img-cell-last" : "",
							" owpgr-img-cell-st-" + item[txt],
							'">',
							'<div class="owpgr-line owpgr-line-g-l"></div>',
							'<div class="owpgr-line owpgr-line-l"></div>',
							'<div class="owpgr-line owpgr-line-r"></div>',
							'<div class="owpgr-line owpgr-line-g-r"></div>',
							'<div class="owpgr-ico owpgr-ico-st"></div>',
							'<div class="owpgr-ico owpgr-ico-arrow"></div>',
							'</td>'
						].join(""));
					}
				}
				sb.push('</tr>');
			}
			sb.push('</table>');
			return sb;
		},
	}

	window.owpgr = function(d) {
		return new owpgr(d);
	}

	$.fn.extend({
		owpgr: function(d){
			this.append(new owpgr(d));
		}
	});

})(jQuery)