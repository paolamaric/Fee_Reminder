<template>
    <div class="cointainer">
        <div class="header">
            <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#Clients">Add New Clients</button>
        </div> 
        <h2 class="my-4"> List of Clients </h2>
            <div class="row my-4"> 
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                ID
                            </th>
                            <th scope="col">
                                Client Name
                            </th>
                            <th scope="col">
                                Email
                            </th>
                            <th scope="col">
                                Phone
                            </th>
                            <th scope="col">
                                Adress
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="client.key" v-for="client in clients">
                            <td>
                                {{client.id}}
                            </td>
                            <td>
                                {{client.cname}}
                            </td>
                            <td>
                                {{client.email}}
                            </td>
                            <td>
                                {{client.phone}}
                            </td>
                            <td>
                                {{client.address}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <div class="modal fade" id="Clients" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel"><b>Add New Client</b></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 well">
                            <form>
                            <div class="form-group row">
                                <label class="col-form-label col-sm-3" for="cname">Client Name: </label>
                                <div class="col-sm-9">
                                    <input type="cname" id="cname" v-model="cname" placeholder="e.g. John Deer" class="form-control">
                                </div>
                            </div>
                            <div class="form-group mt-3 row">
                                <label class="col-form-label col-sm-3" for="email">Email: </label>
                                <div class="col-sm-9"> 
                                    <input id="email" type="email" v-model="email" placeholder="e.g. jdeer@gmail.com" class="form-control">
                                </div>
                            </div>
                            <div class="form-group mt-3 row">
                                <label class="col-form-label col-sm-3" for="phone">Phone: </label>
                                <div class="col-sm-9"> 
                                    <input id="phone" type="phone" minlength=10 v-model="phone" placeholder="e.g. +3851234562" class="form-control">
                                </div>
                            </div>
                            <div class="form-group mt-3 row">
                                <label class="col-form-label col-sm-3" for="address">Address: </label>
                                <div class="col-sm-9"> 
                                    <input id="address" type="address" v-model="address" placeholder="e.g. Wall Street" class="form-control">
                                </div>
                            </div>
                            <button type="button" @click="postNewClient()" class="btn btn-primary btn-sm mt-3">Add Client</button>
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

<script>
import moment from 'moment';
import store from '@/store';
import { firebase } from '@/firebase';
import { db } from '@/firebase';
import { clientsCollection } from '@/firebase';

export default {
    name:'ClientsHost',
    // props: ['Clients'],
  
    data () {
        return {
            clients: [],
            id :'',
            cname:'',
            email:'',
            phone:'',
            address:'',
            };
        },
    mounted () {
        this.getClients();
        },
    methods: {
        postNewClient () {
            const cname= this.cname
            const email= this.email
            const phone = this.phone
            const address = this.address

            db.collection("Clients").add({
                Name: cname,
                Email: email,
                Phone: phone,
                Address: address,
            })
            .then ((doc)=>{
                console.log("Spremljeno ", doc);
                this.cname = "";
                this.email = "";
                this.phone = "";
                this.address ="";
            })
            .catch ((e)=> {
                console.error(e);
            });
        },
        getClients () {
            let clients = [];
            clientsCollection.get().then((results) => {
                results.forEach((doc) => {
                    let data = doc.data();
                    let client = {
                        id: doc.id,
                        cname: data.Name,
                        email: data.Email,
                        phone: data.Phone,
                        address: data.Address                   
                        }
                    this.clients.push(client);
                    })
                })
            console.log("Firebase dohvat")
            },
      
        }
    }
</script>