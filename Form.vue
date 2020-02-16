<template>
  <div>
    <div class="flex" v-if="!submited">
      <div>
        <span>0{{ step }}</span>
        <span>|</span>
        <span>03</span>
      </div>
      <form @submit.prevent="passes(onSubmit)">

        <ValidationObserver v-slot="{ passes }">
          <div v-if="step === 1">
            <h2>Tab 1</h2>
            <TextInput rules="required|alpha" label="First Name" for="firstName" id="firstName" />
            <TextInput rules="required|alpha" label="Last Name"/>
            <button @click.prevent="passes(next)">Next</button>
          </div>
        </ValidationObserver>

        <ValidationObserver v-slot="{ passes }">
          <div v-if="step === 2">
            <button @click.prevent="prev()">Previous</button>
            <button @click.prevent="passes(next)">Next</button>
          </div>
          </ValidationObserver>

        <ValidationObserver v-slot="{ passes }">
          <div v-if="step === 3">
            <button @click.prevent="prev()">Previous</button>
            <button @click.prevent="passes(onSubmit)">Save</button>
          </div>
          </ValidationObserver>

      </form>
    </div>
    <div v-if="submited">
      Thank you for submiting the questionnaire!
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput";
import { ValidationObserver } from "vee-validate";

export default {
  name: "Form",
  components: {
    TextInput,
    ValidationObserver
  },
  data() {
    return {
      step: 1,
      submited: false,
      disabled: false,
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    onSubmit() {
      this.submited = true;
      alert("Submited");
    }
  }
};
</script>

<style lang="scss" scoped>
  
</style>
