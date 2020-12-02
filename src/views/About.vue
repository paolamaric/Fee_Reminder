<template>
  <div class="about">
    <img alt="logo" src="../assets/logo.png.png">
        <div class="container">
          <h2 class="text-center mt-0">O aplikaciji Fee Reminder</h2>
          <hr class="divider my-4" />
            <div class="row">
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Prototip</h3>
                  <a href="https://www.figma.com/proto/38LBg1vELszKSGkrKsE0NV/FeeReminderApp?node-id=1%3A20&viewport=1%2C271%2C0.11149825900793076&scaling=min-zoom">Link na prototip</a> <br>
                  <a href="https://fipu.unipu.hr/">Fakultet informatike u Puli</a> <br>
                  <a href="https://ntankovic.unipu.hr/pi">Kolegij: Programsko inženjerstvo</a> <br>
                  Mentori:<a href="https://ntankovic.unipu.hr"> doc.dr.sc. Nikola Tanković </a> i univ.bacc.inf.Toni Starčić
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Članovi tima</h3>
                  <p class="text-muted mb-0">Anamarija Jozić, Paola Marić i Marta Pokorni</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Kratki opis funkcionalnosti aplikacije:</h3>
                  <p class="text-muted mb-0">Fee Reminder je aplikacija koja pomaže korisniku i pružatelju usluga pri vođenju evidencije o plaćanju članarina.
                  Korisnicima usluga šalje podsjetnike kada treba uplatiti članarinu i za koji mjesec su uplatili, a pružatelju usluga služi kao evidencija uplata.
                  Softver istovremeno može koristiti više udruga/korisnika, SaaS princip. </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Zaduženje po članu tima</h3>
                  <p class="text-muted mb-0">Moje ime je Paola Marić i ja sam zadužena za html/css/js za hosta</p>
                </div>
              </div>
            </div>
          </div>

  </div> 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>
