<template>
  <div class="bacterio">
    <div class="head">
      <div class="nose"></div>
      <div class="cranium"></div>
      <div class="beard">
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="ear"></div>
      <div class="eyes">
        <div></div>
        <div></div>
      </div>
      <div class="eyebrowns">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="body">
      <div class="shirt"></div>
      <div class="jacket"></div>
    </div>
    <div class="arm"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scope>
:root {
  --s1: #f5b690;
  --s2: #fddfcd;
}

.bacterio {
  position: fixed;
  top: 60px;
  right: 90px;
  transform: scale(0.2);
}

.bacterio * {
  position: absolute;
}

.head {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}

.cranium {
  background: linear-gradient(243deg, var(--s1), var(--s1), var(--s2) 75%);
  width: 21vmin;
  height: 28vmin;
  left: 12vmin;
  top: 7.5vmin;
  transform: rotate(22deg);
  border-radius: 66% 38% 40% 59% / 50% 50% 52% 41%;
  box-shadow: -0.75vmin 1vmin 0 0.25vmin #000 inset, -0.9vmin -0.25vmin 0 0.1vmin #000 inset,
    -0.55vmin -0.4vmin 0 0.1vmin #000 inset;
}

.nose {
  background: linear-gradient(-208deg, var(--s1), var(--s2));
  width: 11vmin;
  height: 8.5vmin;
  border-radius: 40% 65% 70% 90% / 51% 100% 50% 100%;
  transform: rotate(10deg);
  top: 18.75vmin;
  left: 3vmin;
  box-shadow: 0.5vmin -0.75vmin 0 0.5vmin #000 inset, 0.75vmin -0.1vmin 0 0.5vmin #000 inset;
  z-index: 1;
}
.nose:before {
  content: '';
  position: absolute;
  background: linear-gradient(52deg, var(--s1), var(--s2));
  width: 11vmin;
  height: 7.5vmin;
  border-radius: 40% 90% 70% 90% / 51% 100% 50% 100%;
  transform: rotate(22deg);
  top: -2vmin;
  left: 4.5vmin;
  box-shadow: 0.5vmin -0.75vmin 0 0.5vmin #000 inset, 0.7vmin -0.25vmin 0 0.5vmin #000 inset;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 83% 100%, 50% 55%, 0 56%);
}

.nose:after {
  content: '';
  position: absolute;
  background: linear-gradient(-20deg, var(--s1), var(--s2));
  width: 6vmin;
  height: 3.25vmin;
  border-radius: 50% 100% 80% 69% / 70% 100% 50% 100%;
  transform: rotate(162deg);
  top: 2.1vmin;
  left: 11vmin;
  box-shadow: 0.15vmin -0.15vmin 0 0.125vmin #000 inset, 0.35vmin 0.15vmin 0 0.125vmin #000 inset;
}

.ear {
  background: radial-gradient(circle at 83% 55%, #fff0 10vmin, #000 calc(10vmin + 1px)),
    linear-gradient(170deg, var(--s1), var(--s1), var(--s2));
  width: 12.5vmin;
  height: 15.5vmin;
  border-radius: 100%;
  left: 27.75vmin;
  top: 16.5vmin;
  transform: rotate(20deg) scaleX(0.8) scaleY(0.75);
  box-shadow: -1.5vmin 0.5vmin 0 0.125vmin #000 inset, -0.75vmin -0.25vmin 0 0.25vmin #000 inset,
    -0.5vmin 1vmin 0 0.25vmin #000 inset;
  z-index: 2;
}

.ear:before {
  content: '';
  position: absolute;
  background: radial-gradient(circle at 92% 9%, #000 0.5vmin, #fff0 calc(0.5vmin + 1px) 1vmin), #f000;
  width: 9vmin;
  height: 9vmin;
  transform: rotate(-25deg);
  top: 5.75vmin;
  left: 3vmin;
  border: 1.25vmin solid #000;
  border-radius: 80%;
  border-bottom-width: 0;
  border-right-color: #fff0;
  border-left-color: #fff0;
  border-left-width: 0;
}

.ear:after {
  content: '';
  position: absolute;
  width: 5vmin;
  height: 5vmin;
  transform: rotate(76deg);
  top: 5.75vmin;
  left: 1vmin;
  border: 2vmin solid #000;
  border-radius: 80%;
  border-bottom-width: 0;
  border-left-color: #fff0;
  border-right-color: #fff0;
  border-right-width: 0;
}

.eyes {
  width: 18vmin;
  height: 14vmin;
  left: 9.5vmin;
  top: 7.1vmin;
  transform: scale(0.85);
}

.eyes div {
  background: #fff;
  width: 6.5vmin;
  height: 9vmin;
  top: 4.75vmin;
  left: 1.95vmin;
  transform: rotate(22deg) skewY(-13deg);
  box-shadow: 0 0.125vmin 0 0.25vmin #000 inset;
  z-index: 1;
  border-radius: 100% 100% !important;
  border: 0.2vmin solid #000;
}

.eyes div:before {
  content: '';
  position: absolute;
  border-radius: 100%;
  top: 3vmin;
  left: 2.5vmin;
  width: 3vmin;
  height: 3.5vmin;
  transform: rotate(174deg);
  background: radial-gradient(ellipse at 49% 53%, #fff 0.45vmin, #000 calc(0.45vmin + 1px));
}

.eyes div + div {
  left: 8.25vmin;
  top: 3.5vmin;
  height: 10.5vmin;
  width: 9vmin;
  z-index: 0;
  transform: rotate(15deg) skewY(-8deg);
}

.eyes div + div:before {
  width: 3.5vmin;
  transform: rotate(-12deg);
  left: 2.5vmin;
  top: 4.5vmin;
  height: 4.5vmin;
  background: radial-gradient(ellipse at 55% 40%, #fff 0.4vmin, #000 calc(0.4vmin + 1px));
}

.eyes:after {
  content: '';
  position: absolute;
  border-top: 0.4vmin solid #000;
  border-radius: 100% 100% 100% 100%;
  transform: rotateY(180deg) rotate(138deg) scale(1.25);
  left: 7.85vmin;
  top: 11.25vmin;
  width: 8vmin;
  border-right: 1.25vmin solid #000;
  height: 2vmin;
  border-bottom: 2vmin solid #fff0;
}

.eyebrowns {
  width: 27vmin;
  height: 19vmin;
  left: 9vmin;
  top: -0.5vmin;
  transform: scale(0.65) rotate(15deg);
}

.eyebrowns div {
  background: radial-gradient(circle at 87% 82%, #fff0 5vmin, #000 calc(5vmin + 1px));
  width: 6vmin;
  height: 6vmin;
  left: 1vmin;
  top: 9.5vmin;
  transform: rotate(-8deg);
  border: 2vmin solid #fff;
  border-top: 2.5vmin solid #000;
  border-right: 0.75vmin solid #fff0;
  border-left: 1.5vmin solid #000;
  border-bottom: 0 solid #fff0;
  border-radius: 100% 33% 0 25%;
  background-repeat: no-repeat;
}

.eyebrowns div + div {
  left: 12vmin;
  top: 4.5vmin;
  height: 5vmin;
  transform: rotate(85deg) scale(1.2);
  border-radius: 100% 35% 0 25%;
}

.eyebrowns div + div:before,
.eyebrowns div + div:after {
  content: '';
  position: absolute;
  width: 7vmin;
  height: 2vmin;
  top: -3.5vmin;
  left: -1.5vmin;
  border-top: 0.55vmin solid #000;
  border-radius: 100%;
  transform: rotate(-26deg);
}

.eyebrowns div + div:after {
  position: absolute;
  width: 6.25vmin;
  top: -5vmin;
  left: -1vmin;
  border-top: 0.5vmin solid #000;
}

.beard {
  width: 32vmin;
  height: 42vmin;
  --brd: #000;
  background: radial-gradient(circle at 37% 65%, var(--brd) 8vmin, #fff0 calc(8vmin + 2px) 100%),
    radial-gradient(circle at 55% 76%, var(--brd) 7vmin, #fff0 calc(7vmin + 2px) 100%),
    radial-gradient(circle at 54% 50%, var(--brd) 14vmin, #fff0 calc(14vmin + 2px) 100%),
    radial-gradient(circle at 64% 31%, var(--brd) 8vmin, #fff0 calc(8vmin + 2px) 100%),
    radial-gradient(circle at 60% 17%, var(--brd) 6vmin, #fff0 calc(6vmin + 2px) 100%), #ffff0000;
  top: 20vmin;
  left: 8vmin;
  border-radius: 100% 111% 78% 96% / 76% 100% 84% 98%;
  transform: rotate(-60deg);
}

.beard div {
  background: radial-gradient(ellipse at -22% 25%, #000 3vmin, #fff0 calc(3vmin + 1px)),
    radial-gradient(ellipse at 15% 45%, #000 2vmin, #fff0 calc(2vmin + 1px)),
    radial-gradient(ellipse at 21% 66%, #000 1vmin, #fff0 calc(1vmin + 1px)), #3f51b500;
  background-repeat: no-repeat;
  width: 8vmin;
  height: 15vmin;
  top: 26vmin;
  left: 24vmin;
  transform: rotate(50deg);
  z-index: 1;
}

.beard div span {
  width: 5vmin;
  height: 1vmin;
  left: -2vmin;
  top: 0vmin;
  border: 4vmin solid #fff0;
  border-top: 2vmin solid #000;
  border-right: 1vmin solid #000;
  border-left-width: 0.125vmin;
  transform: rotate(128deg);
  border-radius: 100% 100% 100% 100%;
}

.beard div span + span {
  top: 1vmin;
  border: 2vmin solid #fff0;
  border-top: 0.5vmin solid #000;
  border-right: 0.5vmin solid #000;
  border-left-width: 0vmin;
  transform: rotate(100deg);
}

.beard div span + span + span {
  top: 11vmin;
  left: 0vmin;
  transform: rotate(54deg);
  border-right-color: #fff0;
}

.beard div span + span + span + span {
  top: 4.25vmin;
  left: 0.5vmin;
  transform: rotate(165deg);
}

.beard div span + span + span + span + span {
  top: 9.25vmin;
  left: 0.5vmin;
  transform: rotateX(180deg) rotate(134deg);
  border: 1vmin solid #fff0;
  border-top: 0.5vmin solid #000;
  border-right: 0.5vmin solid #000;
  border-left-width: 0vmin;
  border-right: 1.15vmin solid #000;
}

.beard div span + span + span + span + span + span {
  top: 9.5vmin;
  left: 0.25vmin;
  width: 8vmin;
}

.beard div span + span + span + span + span + span + span {
  top: 5.25vmin;
  left: -0.75vmin;
  width: 6vmin;
  transform: rotate(159deg);
}

.beard div span + span + span + span + span + span + span + span {
  top: 8.75vmin;
  left: -1.25vmin;
  width: 7vmin;
  transform: rotate(46deg);
  border-right-width: 0;
}

.beard div span + span + span + span + span + span + span + span + span {
  top: 4vmin;
  left: -0.25vmin;
  transform: rotate(-231deg);
}

.beard div + div {
  transform: rotate(123deg) scale(1.15);
  top: 30.5vmin;
  left: 7.5vmin;
}
.beard div + div + div {
  transform: rotate(189deg) scale(1.05);
  top: 12.5vmin;
  left: -3vmin;
}
.beard div + div + div + div {
  transform: rotateY(189deg) rotate(-28deg) scale(1.15);
  top: -1.25vmin;
  left: 5vmin;
}

.beard:before {
  filter: drop-shadow(-0.5vmin 0.6vmin 0px black);
  content: '';
  position: absolute;
  border-right: 0.5vmin solid #000;
  width: 5vmin;
  height: 8vmin;
  left: 24vmin;
  top: 9.5vmin;
  border-radius: 100%;
  transform: rotate(28deg);
  border-top: 0.025vmin solid #fff0;
}
.beard:after {
  filter: drop-shadow(2vmin 2vmin 0px black);
  content: '';
  position: absolute;
  border-right: 0.75vmin solid #000;
  width: 5vmin;
  height: 8vmin;
  left: 24.5vmin;
  top: 11.25vmin;
  border-radius: 100%;
  transform: rotate(41deg);
  border-top: 0.025vmin solid #fff0;
}

.body {
  background: linear-gradient(53deg, #fff0 3.25vmin, #000 calc(3.25vmin + 1px) 3.75vmin, #fff0 calc(3.75vmin + 1px)),
    radial-gradient(circle at 179% 23%, #fff0 6vmin, #000 calc(6vmin + 1px) 6.75vmin, #fff0 calc(6.75vmin + 1px)),
    linear-gradient(20deg, #fff0 3vmin, #000 calc(3vmin + 1px) 3.75vmin, #fff0 calc(3.75vmin + 1px)), #0c8f37;
  width: 31vmin;
  height: 38vmin;
  left: 23vmin;
  top: 28vmin;
  border-radius: 0 58% 0 10%;
  z-index: 1;
  transform: rotate(16deg);
  border: 1vmin solid #000;
  background-repeat: no-repeat;
  background-size: 4vmin 6vmin, 4vmin 6vmin, 4vmin 6vmin;
  background-position: 9% 92%, 9% 92%, 0% 87%;
}

.shirt {
  width: 14vmin;
  height: 20vmin;
  border: 0.75vmin solid #000;
  border-radius: 100% 48% 50% 25%;
  transform: rotate(-32deg);
  top: 17vmin;
  left: 6vmin;
  background: radial-gradient(
    circle at 97% 50%,
    #fff 9vmin,
    #000 calc(9vmin + 1px) 9.25vmin,
    #fff calc(9.25vmin + 1px)
  );
}

.jacket {
  width: 14vmin;
  height: 20vmin;
  border-radius: 0;
  transform: rotate(-17deg);
  top: 10vmin;
  left: 15vmin;
  background: linear-gradient(-223deg, #fff0 4vmin, #000 calc(4vmin + 1px) 4.65vmin, #fff0 calc(4.65vmin + 1px) 100%),
    linear-gradient(-187deg, #fff0 1vmin, #000 calc(1vmin + 1px) 1.65vmin, #fff0 calc(1.65vmin + 1px) 100%),
    conic-gradient(from 176deg at 60% 80%, #fff0 0 0.1deg, #000 2.1deg 31deg, #fff0 0 100%),
    radial-gradient(circle at -104% 20%, #fff0 24vmin, #000 calc(24vmin + 1px) 24.5vmin, #fff0 calc(24.5vmin + 1px));
  background-repeat: no-repeat;
  background-size: 75% 72%, 40% 72%, 100% 72%, 100% 72%;
  background-position: 44% 34%, 50% 94%, 0 100%, 0 100%;
}

.jacket:before,
.jacket:after {
  content: '';
  position: absolute;
  border-bottom: 1.5vmin solid #000;
  border-left: 1vmin solid #fff0;
  width: 5vmin;
  height: 3vmin;
  border-radius: 100%;
  left: 7vmin;
  top: -1.75vmin;
}

.jacket:after {
  border-right: 1vmin solid #fff0;
  width: 4vmin;
  border-radius: 10%;
  left: 1.5vmin;
  top: 1.25vmin;
  transform: rotate(-39deg);
}

.arm {
  width: 12vmin;
  height: 27vmin;
  top: 33.5vmin;
  left: 38.5vmin;
  z-index: 1;
}

.arm:before,
.arm:after {
  content: '';
  position: absolute;
  width: 7vmin;
  height: 3vmin;
  left: 6vmin;
  top: 0vmin;
  border: 3vmin solid #fff0;
  border-top: 1vmin solid #000;
  border-right: 1vmin solid #000;
  border-left-width: 0.125vmin;
  transform: rotate(174deg);
  border-radius: 100% 100% 100% 100%;
}
.arm:after {
  left: 6vmin;
  top: 5vmin;
  transform: rotate(269deg) rotatex(180deg);
}
</style>
