<template>
  <div class="holder">
    <img src="assets/images/me.jpg" alt="show image" />
  </div>
</template>

<style scoped>
.holder {
  margin-top: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  --g:#0000 ,#000 .5deg 90deg,#0000 91deg;
  --m:
      conic-gradient(from 45deg ,var(--g)) 80px 0  no-repeat,
      conic-gradient(from 135deg,var(--g)) 0 80px  no-repeat,
      conic-gradient(from 225deg,var(--g)) -80px 0 no-repeat,
      conic-gradient(from 315deg,var(--g)) 0 -80px no-repeat;
  -webkit-mask: var(--m);
  mask: var(--m);
  transition: .5s linear;
  filter: grayscale(.8);
  cursor: pointer;
}

img:hover {
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
  filter: grayscale(0);
}
</style>