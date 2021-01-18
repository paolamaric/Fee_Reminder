<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <a href="" class="card2" data-toggle="modal" data-target="#Invoice"> 
            <span>
              <span>
                <span>
                  <i class="fas fa-5x fa-file-invoice-dollar" text-primary mb-4></i>
                  <hr>
                  <h5> Invoices </h5>
                </span>
              </span>
            </span>
          </a>
        </div>
        <div class="col-4">
          <a href="/ClientsHost" class="card2"> 
            <span>
              <span>
                <span>
                  <i class="fas fa-5x fa-file-invoice-dollar" text-primary mb-4></i>
                  <hr>
                  <h5> Category </h5>
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
                  <hr>
                  <h5>Reports</h5>
                </span>
              </span>
            </span>
          </a>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import moment from 'moment';
import store from '@/store';
import { db } from '@/firebase';

// export default {
//   components: {
//   mdbContainer,
//   mdbRow,
//   mdbCol
//   },
// }

export default {
    name:'HomeHost',
    props: ['Invoices2'],
    components: {
    },
    data () {
      return {
        ClientName2:'',
        BillName2:'',
        BillAmount2:'',
      };
    },
    mounted () {
        this.getInvoices2();

        db.collection("Invoices2")
            .orderBy("posted_at" , "desc")
            .limit(20)
            .get()
            .then((query) => {
                this.Invoices2 = [];
                query.forEach((doc) => {

                const data = doc.data();

                this.Invoices2.push({
                    id: doc.id,
                    time: data.posted_at,
                    ClientName: data.ClientName2,
                    BillName: data.BillName2,
                    BillAmount: data.BillAmount2
                })
            });
        })
    },
    methods: {
      postNewInvoice () {
          const ClientName2= this.ClientName2
          const BillName2= this.BillName2
          const BillAmount2 = this.BillAmount2

          db.collection("Invoices2").add({
              Client: ClientName2,
              Bill: BillName2,
              Amount: BillAmount2,
              email: store.currentUser,
              created_at: Date.now(),
          })
          .then ((doc)=>{
              console.log("Spremljeno ", doc);
              this.DueDate = "";
              this.ClientName2 = "";
              this.BillName2 = "";
              this.BillAmount2 = "";
              
              this.getInvoices2();
          })
          .catch ((e)=> {
              console.error(e);
          });
      },
      getInvoices2 () {
        console.log("Firebase dohvat")
      },
    }
  }

</script>

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