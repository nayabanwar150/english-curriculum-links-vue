<template>
  <div class="users mt-3">
    <div class="container display p-1">
      <!-- Header -->
      <div class="row">
        <div class="col">
          <h1 class="text-center text-white bg-dark">
            Spoken English <i class="fa fa-volume-up" aria-hidden="true"></i>
          </h1>
        </div>
      </div>
      <!-- Display -->
      <div class="row">
        <div class="col-sm-12 col-md-8 m-auto">
          <div class="cards">
            <div class="card my-5" v-for="(link, k) in links" :key="k">
              <div class="card-body">
                <h4 class="bg-dark text-white p-2 pl-3 mb-3">{{nodeName[k]}}</h4>
                <!-- Grammar -->
                <div class="heading pl-3" v-show="link.grammar">
                  <h5>Grammar</h5>
                  <button class="btn btn-sm btn-danger ml-5">
                    <a
                      :href="link.grammar"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Watch
                      <i class="fa fa-youtube-play" aria-hidden="true"></i
                    ></a>
                  </button>
                </div>
                <!-- Vocabulary -->
                <div class="heading p-3" v-show="link.vocabulary">
                  <h5>Vocabulary</h5>
                  <button class="btn btn-sm btn-danger ml-5">
                    <a
                      :href="link.vocabulary"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Watch
                      <i class="fa fa-youtube-play" aria-hidden="true"></i
                    ></a>
                  </button>
                </div>
                <!-- Practice -->
                <div class="heading p-3" v-show="link.practice">
                  <h5>Practice</h5>
                  <button class="btn btn-sm btn-danger ml-5">
                    <a
                      :href="link.practice"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Watch
                      <i class="fa fa-youtube-play" aria-hidden="true"></i
                    ></a>
                  </button>
                </div>
                <!-- Other -->
                <div class="heading p-3" v-show="link.others">
                  <h5>Others</h5>
                  <button class="btn btn-sm btn-danger ml-5">
                    <a
                      :href="link.others"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Watch
                      <i class="fa fa-youtube-play" aria-hidden="true"></i
                    ></a>
                  </button>
                </div>
                <!-- Notes -->
                <div class="heading p-3" v-show="link.notes">
                  <h5 class="text-primary">Notes : </h5>
                  <p class="px-5"><i class="fa fa-hand-o-right pr-3 text-dark" aria-hidden="true" />{{link.notes}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer">
      <p>Made with ❤️ by Mohd Nayab Anwar</p>
    </div>
  </div>
</template>

<script>
import { linksRef } from "../firebase";
export default {
  name: "Users",
  data() {
    return {
      nodeName: [],
      links: [],
    };
  },
  created() {
    linksRef.on("value", (snapshot) => {
      snapshot.forEach((daySnapshot) => {
        this.nodeName.push(daySnapshot.key);
        daySnapshot.forEach((linksSnap) => {
          this.links.push(linksSnap.val());
        });
      });
    });
    //   .get()
    //   .then(function (snapshot) {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //       this.links = snapshot.val();

    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display {
  border-right: 3px solid #eee;
  border-bottom: 3px solid #eee;
  border-left: 3px solid #eee;
}

.display h1,
h4 {
  background-color: #000 !important;
  font-weight: 700;
  font-size: 30px;
  padding: 10px;
}

.card button a {
  text-decoration: none;
  font-weight: 700;
  color: #fff;
}

.btn {
  border-radius: 0;
}

.fa-hand-o-right{
  font-size: 18px;
}
</style>
