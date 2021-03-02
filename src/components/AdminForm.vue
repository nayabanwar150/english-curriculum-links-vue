<template>
  <div class="form">
    <div>
      <!-- {{ linkNode }} -->
    </div>
    <form v-on:submit.prevent="submitLinks">
      <div class="form-row">
        <div class="form-group col-12">
          <div class="form-row">
            <div class="col">
                <label for="inputState">Day</label>
          <select id="inputState" class="form-control" v-model="selectedDay">
            <option
              v-for="(day, k) in days"
              :key="k"
              :selected="selectedDay === day"
            >
              {{ day }}
            </option>
          </select>
            </div>
            <div class="col">
              <label for="inputState">Months</label>
          <select id="inputState" class="form-control" v-model="selectedMonth">
            <option
              v-for="(month, k) in months"
              :key="k"
              :selected="selectedMonth === month"
            >
              {{ month }}
            </option>
          </select>
            </div>
            <div class="col">
              <label for="inputState">Year</label>
          <select id="inputState" class="form-control" v-model="selectedYear">
            <option
              :selected="selectedYear === currentYear"
            >
              {{ currentYear }}
            </option>
          </select>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <label class="text-left">Grammar</label>
      </div>

      <div class="form-row">
        <div class="form-group col-9 offset-1">
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Topics / Links"
            v-model="linksEntries.grammar"
          />
        </div>
        <div class="form-group col">
          <div class="row">
            <div class="col-6">
              <div class="minus_btn">
                <i class="fa fa-minus-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="add_btn">
                <i class="fa fa-plus-square-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row">
        <label class="text-left">Vocabulary</label>
      </div>

      <div class="form-row">
        <div class="form-group col-9 offset-1">
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Topics / Links"
            v-model="linksEntries.vocabulary"
          />
        </div>
        <div class="form-group col">
          <div class="row">
            <div class="col-6">
              <div class="minus_btn">
                <i class="fa fa-minus-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="add_btn">
                <i class="fa fa-plus-square-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row">
        <label class="text-left">Practice</label>
      </div>

      <div class="form-row">
        <div class="form-group col-9 offset-1">
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Topics / Links"
            v-model="linksEntries.practice"
          />
        </div>
        <div class="form-group col">
          <div class="row">
            <div class="col-6">
              <div class="minus_btn">
                <i class="fa fa-minus-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="add_btn">
                <i class="fa fa-plus-square-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row">
        <label class="text-left">Others</label>
      </div>

      <div class="form-row">
        <div class="form-group col-9 offset-1">
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Topics / Links"
            v-model="linksEntries.others"
          />
        </div>
        <div class="form-group col">
          <div class="row">
            <div class="col-6">
              <div class="minus_btn">
                <i class="fa fa-minus-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="add_btn">
                <i class="fa fa-plus-square-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       <div class="form-row">
        <label class="text-left">Notes</label>
      </div>

      <div class="form-row">
        <div class="form-group col-9 offset-1">
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Topics / Links"
            v-model="linksEntries.notes"
          />
        </div>
        <div class="form-group col">
          <div class="row">
            <div class="col-6">
              <div class="minus_btn">
                <i class="fa fa-minus-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="add_btn">
                <i class="fa fa-plus-square-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { linksRef } from "../firebase";
export default {
  name: "AdminForm",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      days: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',

      ],
      selectedDay: "a",
      selectedMonth: "b",
      selectedYear: "c",
      linksEntries: {
        grammar: "",
        vocabulary: "",
        practice: "",
        others: "",
        notes: ""
      },
    };
  },
  methods: {
    submitLinks() {
      if(linksRef.child(`${this.selectedDay} ${this.selectedMonth} ${this.selectedYear}`).push(this.linksEntries)){
        alert("Successfully Inserted");
      }

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  background-color: #000;
  border-radius: 0;
}
</style>
