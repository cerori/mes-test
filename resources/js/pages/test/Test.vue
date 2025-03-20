<template>
  <div class="min-h-full flex flex-col items-center justify-center">
    <Form v-slot="$form" :initialValues @submit="onSubmit">
      <div class="w-3xl grid md:grid-cols-2 gap-6 divide-x divide-gray-300 pb-6">
        <div class="flex flex-col gap-6 pr-6">
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field1">제품명(일본어)</label>
            <InputText id="field1" name="field1" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1.5">
            <label for="field2">제품명(영어)</label>
            <InputText id="field2" name="field2" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field3">브랜드명</label>
            <InputText id="field3" name="field3" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="field4">표준 ID</label>
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
            <label for="username">규격명(제품 정보)</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">가격 (세금미포함)</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">가격 (세금포함)</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">케이스 수량(1박스)</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">다음번 납품 예정일</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">다음번 납품예정 수량</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">상태</label>
            <InputText id="username" type="text" />
            <Message v-if="$field?.invalid">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" class="flex flex-col gap-1">
            <label for="username">내용물 제조 국가</label>
            <InputText id="username" type="text" />
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
import { ref } from "vue";

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
  console.log(e);
};
</script>
