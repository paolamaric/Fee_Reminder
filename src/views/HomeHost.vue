<template>
      <div class="container">
        <div class="row">
          <div class="col-4">
                 <a href="" class="card2"> 
                  <span>
                    <span>
                      <span>
                        <i class="fas fa-5x fa-file-invoice-dollar" text-primary mb-4></i>
                        <!-- <img src="/img/Invoices.jpeg"> -->
                        <hr>
                        <h5> Invoices </h5>
                      </span>
                    </span>
                  </span>
                 </a>
            </div>
            <div class="col-4">
                 <a href="" class="card2"> 
                  <span>
                    <span>
                      <span>
                        <i class="fas fa-5x fa-address-card" text-primary mb-4></i>
                        <!-- <img src="/img/Invoices.jpeg"> -->
                        <hr>
                        <h5> Clients </h5>
                      </span>
                    </span>
                  </span>
                 </a>
            </div>
            <div class="col-4">
                 <a href="" class="card2"> 
                  <span>
                    <span>
                      <span>
                        <i class="fas fa-chart-line fa-5x" text-primary mb-4></i>
                        <!-- <img src="/img/Reports.jpeg"> -->
                        <hr>
                        <h5>Reports</h5>
                      </span>
                    </span>
                  </span>
                 </a>
            </div>
        </div> 
    </div>
</template>

<style lang="scss">
// Normalize/Reset only elements used
body {
  margin: 0;
  padding: 0;
}

// Mixin for shadow button with block sliding up
@mixin card2-border-slide($color, $hoverColor, $borderWidth, $time) {
  $easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  position: relative;

  display: inline-block;
  padding: 0.5em 2em;

  cursor: pointer;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;

    height: $borderWidth;
    width: 100%;

    background-color: $color;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  &:hover {

    & > * {

      & > * {

        &:before,
        &:after {
          transform: translate3d(0, 0, 0);
        }

        & > * {
          &:before,
          &:after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  & > * {

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;

      height: 100%;
      width: $borderWidth;

      background-color: $color;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }

    & > * {

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        z-index: 9;

        height: $borderWidth;
        width: 100%;

        background-color: $hoverColor;
      }

      &:before {
        top: 0;

        transform: translate3d(-105%, 0, 0);
        transition: transform $time $easing;
      }

      &:after {
        bottom: 0;
        
        transform: translate3d(105%, 0, 0);
        transition: transform $time $easing;
      }

      & > * {

        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          z-index: 9;

          height: 100%;
          width: $borderWidth;

          background-color: $hoverColor;
        }

        &:before {
          left: 0;

          transform: translate3d(0, 105%, 0);
          transition: transform $time $easing;
        }

        &:after {
          right: 0;

          transform: translate3d(0, -105%, 0);
          transition: transform $time $easing;
        }
      }
    }
  }
}

// Start of styling
* {
  box-sizing: border-box;
}

.col-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}

div.col-4 a {
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
}

.card2 {
  @include card2-border-slide(#252525, #168dff, 3px, 0.8s);
  padding: 50px;
  background-color: #f2f2f2;
}

</style>