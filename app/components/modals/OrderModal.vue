<script lang="ts" setup>
const name = ref<string>("");
const number = ref<number>();
const adress = ref<string>("");
const floor = ref<number>();
const intercom = ref<number>();

const selectedOption = ref("hide");

const storeModal = useModal();

async function addOrder() {
  try {
    if (!name.value || name.value.trim() === "") {
      throw new Error("Поле Имя не заполнено");
    }

    if (!number.value) {
      throw new Error("Поле Телефон не заполнено");
    }

    if (selectedOption.value === "show") {
      if (!adress.value || name.value.trim() === "") {
        throw new Error("Поле Адрес не заполнено");
      }
    }

    const dataOrder = {
      name: name.value,
      number: number.value,
      type: selectedOption.value === "hide" ? "pickup" : "delivery",
      adress: adress.value,
      floor: floor.value,
      intercom: intercom.value,
    };

    await $fetch(`${apiConfig.baseURL}${apiConfig.endPoints.orders}`, {
      method: "POST",
      body: dataOrder,
    });

    alert("Заказ успешно создан");
    storeModal.close();
  } catch (error) {
    alert(error);
  }
}
</script>

<template>
  <div class="order">
    <div class="order__img">
      <img src="/images/pic2.png" alt="ImageOrder" />
    </div>
    <div class="order__main">
      <div class="order__title h1">Доставка</div>
      <form action="" class="order__form" @submit.prevent="addOrder">
        <div class="order__form-header">
          <UiInput :placeholder="'Ваше имя'" v-model="name" />
          <UiInput :placeholder="'Телефон'" :type="'number'" v-model="number" />
        </div>
        <div class="order__form-radio">
          <UiRadio v-model="selectedOption" value="hide">Самовывоз</UiRadio>
          <UiRadio v-model="selectedOption" value="show">Доставка</UiRadio>
        </div>

        <div v-if="selectedOption === 'show'" class="order__form-adress">
          <UiInput :placeholder="'Адрес'" v-model="adress" />
          <div class="order__form-wrapper">
            <UiInput :placeholder="'Этаж'" v-model="floor" />
            <UiInput :placeholder="'Домофон'" v-model="intercom" />
          </div>
        </div>

        <div class="order__form-btn">
          <UiButton :style="'orange'" :fullwidth="true">Оформить</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order {
  display: flex;
  height: 100%;
  &__img {
    display: none;
    @include min("tablet") {
      display: block;
      background: var(--color-accent);
      padding: 65px 21px;
      flex-shrink: 0;
    }
  }
  &__main {
    flex-grow: 1;
    background: var(--color-light-gray);
    padding: 34px 10px;
    @include min("mobile") {
      padding: 20px 16px;
    }
    @include min("tablet") {
      padding: 44px 24px;
    }
  }
  &__form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 32px);
    &-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &-radio {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    &-btn {
      margin-top: auto;
    }
    &-adress {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 16px;
    }
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(2, minmax(0px, 1fr));
      column-gap: 8px;
    }
  }
}
</style>
