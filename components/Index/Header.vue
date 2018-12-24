<template>
<div>
    
    <header id="home">
        <div class="container">
            <div class="header-content">
                <div class="header-content-inner">
                    <h1>Hello, I'm Mike Frank</h1>
                    <h3><i class="fas fa-code-branch"></i> Developer and <i class="fas fa-glasses" aria-hidden="true"></i> 
                        geek from <i class="fas fa-map-marker" aria-hidden="true"></i> Winnipeg, Canada</h3>
                    <p><a href="#about" class="btn btn-primary text-uppercase">Learn More</a></p>
                </div>

            </div>
        </div>
    </header>

</div>
</template>

<script>

</script>

<style scoped lang="scss">
header {
  background: black url('~assets/img/full/c3-blue.jpg');
  background-size: cover;
  position: relative;
  width: 100%;
  overflow-y: hidden;
  text-align: center;
  min-height: 100%;

  h1, h2, h3, h4, h5, h6 {
    color: white;
    text-shadow: 0px 0px 3px rgba(150, 150, 150, 1);

    &:after {
      content: ""; // No red dot in the header
    }
  }

  .btn {
    color: #323232;
    background: rgba(255,255,255,1);
    border: none;
  }

  .btn:hover {
    background: rgba(255,255,255,0.85);
    color: #323232;
  }

  .header-content {
    text-align: center;
    position: relative;
    padding: 0;
    height: 100vh;
    width: 100%;
    font-family: 'Mukta', sans-serif;

    .header-content-inner {
      max-width: none;
      width: 100%;
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%)
    }

  }

  .fas {
      opacity: 0.3;
  }
}
</style>