(self.webpackChunkthuc_tap_frontend_admin_nhom2=self.webpackChunkthuc_tap_frontend_admin_nhom2||[]).push([[664],{8275:function(e,t,n){var a,r=n(2122).default,i=n(6690).default,l=n(9728).default,o=n(6115).default,u=n(1655).default,c=n(6389).default,s=n(4704).default,d=Object.create,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,b=function(e,t,n,a){if(t&&"object"===typeof t||"function"===typeof t){var r,i=s(h(t));try{var l=function(){var i=r.value;y.call(e,i)||i===n||f(e,i,{get:function(){return t[i]},enumerable:!(a=p(t,i))||a.enumerable})};for(i.s();!(r=i.n()).done;)l()}catch(o){i.e(o)}finally{i.f()}}return e},g=function(e,t,n){return function(e,t,n){t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},v={};!function(e,t){for(var n in t)f(e,n,{get:t[n],enumerable:!0})}(v,{default:function(){return x}}),e.exports=(a=v,b(f({},"__esModule",{value:!0}),a));var _=function(e,t,n){return n=null!=e?d(m(e)):{},b(!t&&e&&e.__esModule?n:f(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),w="64px",k={},x=function(e){"use strict";u(n,e);var t=c(n);function n(){var e;return i(this,n),e=t.apply(this,arguments),g(o(e),"mounted",!1),g(o(e),"state",{image:null}),g(o(e),"handleKeyPress",(function(t){"Enter"!==t.key&&" "!==t.key||e.props.onClick()})),e}return l(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.url,a=t.light;e.url===n&&e.light===a||this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(e){var t=this,n=e.url,a=e.light,r=e.oEmbedUrl;if(!_.default.isValidElement(a))if("string"!==typeof a){if(!k[n])return this.setState({image:null}),window.fetch(r.replace("{url}",n)).then((function(e){return e.json()})).then((function(e){if(e.thumbnail_url&&t.mounted){var a=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");t.setState({image:a}),k[n]=a}}));this.setState({image:k[n]})}else this.setState({image:a})}},{key:"render",value:function(){var e=this.props,t=e.light,n=e.onClick,a=e.playIcon,i=e.previewTabIndex,l=e.previewAriaLabel,o=this.state.image,u=_.default.isValidElement(t),c={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:r({width:"100%",height:"100%",backgroundImage:o&&!u?"url(".concat(o,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},c),shadow:r({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:w,width:w,height:w,position:u?"absolute":void 0},c),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},d=_.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},_.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return _.default.createElement("div",r({style:s.preview,className:"react-player__preview",onClick:n,tabIndex:i,onKeyPress:this.handleKeyPress},l?{"aria-label":l}:{}),u?t:null,a||d)}}]),n}(_.Component)}}]);
//# sourceMappingURL=reactPlayerPreview.3f8101f2.chunk.js.map