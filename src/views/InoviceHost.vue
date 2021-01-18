<template>
<div>
    <div class="cointainer">
    <h2 class="my-4"> List of Upcoming Bills </h2>
        <div class="row my-4"> 
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            Invoice ID
                        </th>
                        <th scope="col">
                            Client Name
                        </th>
                        <th scope="col">
                            Bill Name
                        </th>
                        <th scope="col">
                            Bill Amount
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>

  <div class="modal fade" id="Invoice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel"><b>Create New Invoice</b></h3>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
                                  <div id="app">
                                    <mdb-container>
                                      <mdb-row>
                                        <mdb-col>
                                          <!-- <b> {{Invoices2.id}} </b> -->
                                          <br>Buisness info<br>
                                        </mdb-col>
                                        <mdb-col>
                                          <b>Due on receipt</b><br>
                                          <div id="app">
                                             <input type="date" id="DueDate" v-model="DueDate">
                                          </div>
                                        </mdb-col>
                                      </mdb-row>
                                    </mdb-container>
                                  </div>
                                <div class="form-group row">
                                    <label class="col-form-label col-sm-3" for="ClientName2" >To: </label>
                                    <div class="col-sm-9">
                                        <input type="text" id="ClientName2" v-model="ClientName2" placeholder="Enter Client Name Here..." class="form-control">
                                    </div>
                                </div>
                                <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-3" for="BillName2">Bill name: </label>
                                    <div class="col-sm-9"> 
                                        <input id="BillName2" type="text" v-model="BillName2" placeholder="e.g. Membership fee" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-3" for="BillAmount2">Bill amount: </label>
                                    <div class="col-sm-9"> 
                                        <input id="BillAmount2" type="number" minlength=1,2 v-model="BillAmount2" placeholder="e.g. 150,00 kn" class="form-control">
                                    </div>
                                </div>
                                <div class="text-right">
                                    <a href="http://www.hok-cba.hr/hr/upute-o-na%C4%8Dinu-ispunjavanja-uplatnica">Payment Instructions</a>
                                </div>
                                <button type="button" class="btn btn-secondary btn-sm mt-3">Mark Paid</button>
                                <button type="button" class="btn btn-primary btn-sm mt-3">Add Invoice</button>
                                </form> 
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                    </div>
              </div>
            </div>
          </div> 
          </div> 
</template>

<script>

export default {
    name:'InvoiceHost',
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
}
.col-12 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}
.col-4 {
  font-size: 1.5em;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
}
</style> 
