<template>
<div>
    <div class="cointainer">
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
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
        <div class="p-2 flex-fill bd-highlight">
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="">Add New Client</a>
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
export default {
    name: 'ClientsHost'
}
</script>