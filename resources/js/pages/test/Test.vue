<template>
  <div class="min-h-full flex flex-col items-center justify-center">
    <div class="w-full flex justify-end mb-10">
      <Select v-model="selectedLocale" :options="optionsLocale" optionLabel="name" optionValue="code" />
    </div>
    <Form v-slot="$form" :initialValues :resolver="resolver" @submit="onSubmit">
      <div class="w-3xl grid md:grid-cols-2 gap-6 divide-x divide-gray-300 pb-6">
        <div class="flex flex-col gap-6 pr-6">
          <FormField v-slot="$field" name="field1" class="flex flex-col gap-1">
            <label for="field1">{{ t("message.field1") }}</label>
            <InputText id="field1" type="text" />
            <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" name="field2" class="flex flex-col gap-1.5">
            <label for="field2">{{ t("message.field2") }}</label>
            <InputText id="field2" type="text" />
            <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field3">{{ t("message.field3") }}</label>
            <InputText id="field3" name="field3" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field4">{{ t("message.field4") }}</label>
            <InputText id="field4" name="field4" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field5">제품 표준 ID</label>
            <InputText id="field5" name="field5" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field6">JAN 코드</label>
            <InputText id="field6" name="field6" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field7">제품 종류</label>
            <Select id="field7" name="field8" :options="field7" optionLabel="name" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field9">마지막 납품일</label>
            <DatePicker showIcon id="field9" name="field9" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field10">마지막 납품 개수</label>
            <InputText id="field10" name="field10" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field11">품질 분류</label>
            <InputText id="field11" name="field11" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field12">용기 제조 국가</label>
            <InputText id="field12" name="field12" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
        </div>
        <div class="flex flex-col gap-6">
          <FileUpload> </FileUpload>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field13">규격명(제품 정보)</label>
            <InputText id="field13" name="field13" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field14">가격 (세금미포함)</label>
            <InputText id="field14" name="field14" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field15">가격 (세금포함)</label>
            <InputText id="field15" name="field15" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field16">케이스 수량(1박스)</label>
            <InputText id="field16" name="field16" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field17">다음번 납품 예정일</label>
            <DatePicker id="field17" name="field17" showIcon />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field18">다음번 납품예정 수량</label>
            <InputText id="field18" name="field18" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field19">상태</label>
            <InputText id="field19" name="field19" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field20">내용물 제조 국가</label>
            <InputText id="field20" name="field20" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
        </div>
      </div>
      <div class="flex justify-end">
        <Button type="submit" label="저장" />
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
  useScope: "global",
});

const selectedLocale = ref("ja");

watch(selectedLocale, (n) => {
  locale.value = n;
});

const optionsLocale = ref([
  { name: "일어", code: "ja" },
  { name: "한국어", code: "ko" },
]);

const resolver = ref(
  zodResolver(
    z.object({
      field1: z.string().min(1),
      field2: z.string().min(1),
      field3: z.string().min(1),
      field4: z.string().min(1),
    })
  )
);

const field7 = ref([
  { name: "제품1", code: "1" },
  { name: "제품2", code: "2" },
]);

const initialValues = ref({
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
  field10: "",
  field11: "",
  field12: "",
  field13: "",
  field14: "",
  field15: "",
  field16: "",
  field17: "",
  field18: "",
  field19: "",
  field20: "",
});

const onSubmit = (e) => {
  if (!e.valid) {
    console.log(e.valid);
    return;
  }

  console.log(e);
};
</script>
