<script setup lang="ts">
import {useI18n} from "vue-i18n";

export type VoucherStatus = "usable" | "expired" | "already_used" | "invalid";

export interface Location {
  id: number;
  address: string;
  phone: string;
  working_hours: string;
  is_active: boolean;
}

export interface Store {
  id: number;
  brand_name: string;
  description: string;
  website: string;
  is_active: boolean;
  logo_url: string;
  locations: Location[];
}

export interface Merchant {
  id: number;
  name: string;
  description: string;
  contact_phone: string;
  slug: string;
  is_active: boolean;
  store: Store;
}

export interface VoucherDetails {
  voucher_number: string;
  user_fullname: string;
  phone: string;
  purchase_date: number; // UNIX timestamp (seconds)
  general_info: string;
  rules: string;
  image: string; // URL
  voucher_amount: number;
  minimum_purchase: number;
  expires_on: string; // ISO date string
  days_until_expiration: number;
  merchant: Merchant;
}

interface IProps {
  voucher: VoucherDetails
}

const props = defineProps<IProps>()

const {t} = useI18n()
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center mb-4 gap-2 items-center">
      <div class="w-9 h-9 border border-gold-text rounded-full text-4xl text-green-600 flex justify-center items-center">✓</div>
      {{ t('voucher_info.valid') }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 mb-6">
      <div>
        <div class="flex flex-col gap-3">
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconScan class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.number') }}</p>
              <p class="info-item__append__value">{{ props.voucher?.voucher_number }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconPerson class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.user') }}</p>
              <p class="info-item__append__value">{{ props.voucher?.user_fullname }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconPhone class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.phone') }}</p>
              <p class="info-item__append__value">{{ props.voucher?.phone }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconCalendar class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.purchase_date') }}</p>
              <p class="info-item__append__value">{{ new Date(props.voucher?.purchase_date).toISOString().split('T')[0] }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconClock class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.expires_on') }}</p>
              <p class="info-item__append__value">{{ props.voucher?.expires_on }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconList class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.rules') }}</p>
              <p class="info-item__append__value">{{ props.voucher?.rules }}</p>
            </div>
          </div>
          <div v-for="item in props.voucher.merchant.store.locations" class="info-item !items-start">
            <div class="info-item__prepend">
              <LazyIconLocation class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">{{ t('voucher_info.address') }}</p>
              <p class="info-item__append__value">{{ item.address }}</p>
              <p class="info-item__append__value">
                <span class="info-item__append__label">{{t('voucher_info.working_hours')}}: </span>
                {{ item.working_hours }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col  items-center justify-start gap-8">
        <NuxtImg
          :src="props.voucher?.image || 'advantage.png'"
          class="border border-gold-text w-[300px] h-[300px] flex justify-center items-center rounded-full overflow-hidden object-cover object-center"
        />

        <p class="text-xl font-semibold">{{ props.voucher?.merchant?.store?.brand_name }}</p>
      </div>
    </div>

    <div class="w-max mx-auto info-item">
      <div class="info-item__prepend">
        <LazyIconPhone class="info-item__prepend__icon"/>
      </div>
      <div class="info-item__append">
        <p class="info-item__append__label">{{ t('voucher_info.operator_call') }}</p>
        <a :href="`tel:${props.voucher?.phone}`" class="info-item__append__value">{{ props.voucher?.merchant?.contact_phone }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-item {
  @apply flex gap-2 items-center;

  &__prepend {
    @apply border-2 border-gold-text w-9 h-9 flex justify-center items-center flex-shrink-0 rounded-full;
    &__icon {
      @apply text-xl text-gold-text;
    }
  }
  &__append {
    &__label {
      @apply text-sm text-gold-text;
    }
  }
}
</style>