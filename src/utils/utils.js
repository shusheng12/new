//防抖 每次更新重新设定时间
export function _debounce(fn, delay = 200) {
  //函数闭包下面有引用所以不会被销毁
  var timer = null;

  return function () {
    var th = this;
    var args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(th, args);
    }, delay);
  };
}

//节流 在规定时间只能执行一次

export const _throttle = (fn, t) => {
  let last;
  let timer;
  let interval = t || 200;
  // 返回值是个函数
  return function () {
    let args = arguments;
    let now = +new Date();

    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval);
    } else {
      console.log(last);

      last = now;
      fn.apply(this, args);
    }
  };
};

//深拷贝
export function name(old, new1) {
  for (var k in old) {
    if (old[k] instanceof Array) {
      new1[k] = [];
      name(old[k], new1[k]);
    } else if (old[k] instanceof Object) {
      new1[k] = {};
      name(old[k], new1[k]);
    } else {
      new1[k] = old[k];
    }
  }
}

//手机号验证
export function validatePhone(phone) {
  const regex = /^0?(1[3456789][0-9])[0-9]{8}$/;
  return regex.test(phone);
}

//随机验证码
export function randomString(len) {
  len = len || 32;
  var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var maxPos = $chars.length;
  var pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
