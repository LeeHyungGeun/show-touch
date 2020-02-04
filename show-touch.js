const $point = document.createElement('div');
$point.id = 'mtouch-point';
$point.style.padding = '5px';
$point.style.borderRadius = '50%';
$point.style.background = 'red';
$point.style.position = 'fixed';
$point.style.transform = 'translate(-50%, -50%)';
$point.style.zIndex = '99999999999999999';
document.body.appendChild($point);

document.body.addEventListener('click', e => {
  const { pageX, pageY } = e;

  $point.style.left = pageX + 'px';
  $point.style.top = pageY + 'px';
});