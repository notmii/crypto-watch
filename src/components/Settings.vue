<template>
  <div>
    <div ref="modal" class="modal" tabindex="-1">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Settings</h5>
            <button type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link"
                  :class="{active: active === 'crypto'}"
                  @click="active = 'crypto'">
                  Crypto
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  :class="{active: active === 'forex'}"
                  @click="active = 'forex'">
                  Forex
                </a>
              </li>
            </ul>

            <div v-show="active === 'crypto'">
              <div class="mb-3">
                <label for="currency" class="form-label">Currency</label>
                <input type="text"
                  class="form-control"
                  id="currency"
                  placeholder="php"
                  v-model="config.currency">
              </div>
              <div class="mb-3">
                <label for="coins" class="form-label">Coins</label>
                <textarea class="form-control"
                  id="coins"
                  rows="10"
                  v-model="config.coins">
                </textarea>
              </div>
            </div>
  
            <div v-show="active === 'forex'">
              <div class="mb-3">
                <label for="symbols" class="form-label">Symbols</label>
                <textarea class="form-control"
                  id="symbols"
                  rows="10"
                  v-model="config.forex">
                </textarea>
              </div>
            </div>
            
          </div>
          <div class="modal-footer">
            <button type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <button type="button"
              class="btn btn-primary"
              @click="saveConfig">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="position-fixed bottom-0 end-0 m-4">
      <button type="button rounded-circle"
        class="btn btn-warning"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        @click="showModal">
      <i class="fas fa-cog fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import DefaultConfig from '@consts/DefaultConfig';
export default {
  data() {
    return {
      modal: null,
      active: 'crypto',
      config: {
        currency: DefaultConfig.currency,
        coins: DefaultConfig.coins.join("\n"),
      },
    }
  },
  mounted() {
    if (localStorage.config) {
      this.config = JSON.parse(localStorage.config);
    }
    this.modal = new Modal(
      this.$refs.modal,
      {
        focus: true,
      }
    );
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    saveConfig() {
      localStorage.config = JSON.stringify(this.config);
      this.modal.hide();
      location.reload();
    },
  }
}
</script>
