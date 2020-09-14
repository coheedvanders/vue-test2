<template>
  <div>
    <div>BOT SWARM</div>
    <div>
      <input type="text" placeholder="number of bots to run" />
      <input type="checkbox" /> Is Seller?
      <button @click="runBot">Run Bot</button>
    </div>
    <div>Bot Count: {{ botCtr }}</div>
  </div>
</template>

<script>
//const apiDomain = "https://localhost:44388/";
const apiDomain = "https://localhost:5001/";
const defaulUsername = "rei";
const defaultPassword = "adminx";
var //appBaseUrl = "api/app",
  userBaseUrl = "api/app/user";
//shopBaseUrl = "api/app/shop",
//productBaseUrl = "api/app/product",
//addressBaseUrl = "api/app/address",
//orderBaseUrl = "api/app/order-transaction";

var //userApiUrlGet = `${userBaseUrl}/get`,
  //userApiUrlSignIn = `${userBaseUrl}/signin`,
  userApiUrlManage = `${userBaseUrl}/manage`;
//userApiUrlPrimaryPhotoList = `${userBaseUrl}/info/primary-photo/list`,
//userApiUrlContactNumberManage = `${userBaseUrl}/info/contact-number/manage`,
//userApiUrlContactNumberList = `${userBaseUrl}/info/contact-number/list`,
//userApiUrlAddressManage = `${userBaseUrl}/info/address/manage`,
//userApiUrlAddressList = `${userBaseUrl}/info/address/list`,
//userApiUrlCreateShop = `${userBaseUrl}/create-shop`;

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "BotSwarm",
  data() {
    return {
      numberOfBots: 0,
      botCtr: 0,
    };
  },
  methods: {
    runBot() {
      this.botCtr++;
      this.testConnect();
    },
    testConnect() {
      //const url = apiDomain + userApiUrlManage;
      const data = {
        ManageType: 10,
        Data: {
          Id: 0,
          Username: null,
          FullName: this.generateRandomString(7),
          EmailAddress: `${this.generateRandomString(8)}@${this.generateRandomString(4)}.com`,
          Type: { Value: "1", Text: "" },
          Password: this.generateRandomString(5),
          Shop: { Id: 0, EntityName: "", Name: `shop-${this.generateRandomString(6)}` },
          Timezone: { Id: 42, EntityName: "", Name: "" },
        },
      };

      this.executePostRequest(defaulUsername,defaultPassword,userApiUrlManage,data,function(response){
        console.log("callback executePostRequest: ",response);
      });
    },
    executePostRequest(username, password, apiUrl, data, callback) {
      const token = Buffer.from(
        `username=${username};password=${password};orgshortname=`,
        "utf8"
      ).toString("base64");
      var url = apiDomain + apiUrl;
      axios
        .post(url, data, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then(function (response) {
          callback(response);
        });
    },
    generateRandomString(len) {
      let text = " ";
      let chars =
        "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < len; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return text;
    },
  },
};
</script>