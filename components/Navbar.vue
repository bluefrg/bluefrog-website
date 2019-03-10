<template>
<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#home">
                <img src="~assets/img/logo-black.png" class="header-dark">
                <img src="~assets/img/logo-white.png" class="header-light">
            </a>
        </div>

        <button type="button" class="navbar-toggler float-right" data-toggle="collapse"
                data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span> <i class="fas fa-bars"></i>
        </button>
        
        <div class="collapse navbar-collapse">
          
            <ul class="navbar-nav ml-auto" id="list-example">
                <li>
                    <a href="#home" class="nav-link">Home</a>
                </li>
                <li>
                    <a href="#about" class="nav-link">About</a> 
                </li>
                <li>
                    <a href="https://keybase.io/mfrank" class="nav-link" title="Securely communicate with me">PGP Key</a>
                </li>
                <li>
                    <a href="https://github.com/bluefrg" class="nav-link" title="Code with me on GitHub">
                        <i class="fab fa-github" aria-hidden="true"></i> <span>GitHub</span></a>
                </li>
                <li>
                    <a href="https://facebook.com/micheal.frank" class="nav-link" title="Chat with me on Facebook">
                        <i class="fab fa-facebook-f" aria-hidden="true"></i> <span>Facebook</span></a>
                </li>
                <li>
                    <a href="https://ca.linkedin.com/in/michealfrank" class="nav-link" title="Join my network on LinkedIn">
                        <i class="fab fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
                </li>
                <li>
                    <a href="https://instagram.com/bluefrg" class="nav-link" title="See my passion on Instagram">
                        <i class="fab fa-instagram" aria-hidden="true"></i> <span>Instagram</span></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  mounted() {
      // Unused for now
    // $("body").scrollspy({
    //     target: ".navbar",
    //     offset: 200
    // })

    $(window).scroll(function (event) {
        if ($(window).scrollTop() < 200) {
            $('.navbar').removeClass('affix').addClass('affix-top')
        }
        else {
            $('.navbar').removeClass('affix-top').addClass('affix')
        }
    }).trigger('scroll')
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables.scss';

.navbar-brand {
  position: relative;
  width: 133px;
  height: 17px;
  padding-left: 15px;

  img {
    position: absolute;
    height: 100%;
    transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
  }
}

.navbar {
  transition: all .35s;
  padding: 10px 0;
  font-family: 'Mukta', sans-serif;
  font-weight: 700;
  

  .navbar-nav {
    .active {
      a {
        color: $primaryColor;
        // background-color: transparent;
      }
    }

    > li > a {
      color: white;

      &:focus, &:hover {
        color: $primaryColor !important;
      }
    }
  }

  .navbar-toggler {
    color: white;
  }

  &.affix {
    background-color: rgba(255, 255, 255, .95);

    .navbar-nav .active a, .navbar-nav a {
      color: $normalColor;
    }

    .navbar-toggler {
      color: black;
    }
  }

  &.affix-top {
    .navbar-nav .active a, .navbar-nav a {
      color: white;
    }

    .navbar-collapse {
      &.show, &.collapsing {
        background-color: rgba(0, 0, 0, .90);
        border: none;
      }
    }
  }

  .navbar-collapse {
    span {
      display: none;
    }

    &.show, &.collapsing {
      text-align: left;

      a {
        padding-left: 15px;
      }

      i {
        // Hide icons when in wide menu
        display: none;
      }
      
      span {
        display: inline;
      }
    }
  }
}

.affix-top {
  .header-dark {
    opacity: 0;
  }
  .header-light {
    opacity: 1;
  }
}

.affix {
  .header-dark {
    opacity: 1;
  }
  .header-light {
    opacity: 0;
  }
}

</style>