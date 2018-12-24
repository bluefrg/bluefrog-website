<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/variables.scss';

body,
html {
  height: 100%;
  width: 100%
}

body {
  line-height: 24px;
  color: $normalColor;
  font-size: 13px;
  font-family: "Roboto","Helvetica Neue",HelveticaNeue,Arial,sans-serif;
  font-weight: 400;
  background: #fafafa;
}

a {
  -webkit-transition: all .35s;
  -moz-transition: all .35s;
  transition: all .35s;
  color: $primaryColor;

  &:focus,
  &:hover {
    color: lighten($primaryColor, 20%);
    outline: none;
    text-decoration: none;
  }
}


h1, h2, h3, h4, h5, h6 {
  color: #323232;
  text-transform: uppercase;
  font-weight: 800;
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: 'Mukta', sans-serif;
}

h1 {
  font-size: 43px;
  letter-spacing: 5px;
  line-height: 40px;
}

h1.h1, h2.h2 {
  letter-spacing: 15px;
}

@media (max-width: 767px) {
  h1.h1, h2.h2 {
    letter-spacing: 0px;
  }
}

h2 {
  font-size: 27px;
  letter-spacing: 2px;
  line-height: 37px;
  margin-bottom: 20px;
  padding-top: 10px;
}

h3 {
  font-size: 21px;
  letter-spacing: 4px;
  line-height: 32px;
}

h3:after {
  color: $primaryColor;
  content: ".";
  font-size: 34px;
}

h4 {
  font-size: 17px;
  letter-spacing: 2px;
  line-height: 28px;
}

h4.h4 {
  letter-spacing: 4px;
}

h5 {
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 23px;
  font-weight: 600;
}

h6 {
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 17px;
  font-weight: 600;
}

h1.large {
  font-size: 50px; 
}

p {
  font-size: 14px;
  font-weight: 300;
  margin: 0px 0 10px 0;
}

.btn:focus {
  outline: none;
}

.btn, button {
  font-size: 12px;
  line-height: normal;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  padding: 11px 20px;
}

.spacer-15 {
  width: 100%;
  height: 15px;
}

.spacer-30 {
  width: 100%;
  height: 30px;
}

.spacer-45 {
  width: 100%;
  height: 45px;
}

.spacer-60 {
  width: 100%;
  height: 60px;
}

.spacer-75 {
  width: 100%;
  height: 75px;
}

.spacer-90 {
  width: 100%;
  height: 90px;
}
</style>