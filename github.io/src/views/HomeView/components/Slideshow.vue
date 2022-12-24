<template>
  <div class="holder">
    <img src="assets/images/me.jpg" alt="show image" />
  </div>
</template>

<style scoped>
.holder {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  --g:#0000 ,#000 .5deg 90deg,#0000 91deg;
  --m:
      conic-gradient(from 45deg ,var(--g)) 20px 0  no-repeat,
      conic-gradient(from 135deg,var(--g)) 0 20px  no-repeat,
      conic-gradient(from 225deg,var(--g)) -20px 0 no-repeat,
      conic-gradient(from 315deg,var(--g)) 0 -20px no-repeat;
  -webkit-mask: var(--m);
  mask: var(--m);
  transition: .3s linear;
  filter: grayscale(.5);
  cursor: pointer;
}

img:hover {
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
  filter: grayscale(0);
}
</style>