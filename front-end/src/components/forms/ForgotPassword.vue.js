import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
// Regras de validação para o e-mail
const emailRules = [
    (v) => !!v || "E-mail é obrigatório",
    (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
];
// Função para lidar com a redefinição de senha
const handleResetPassword = () => {
    if (email.value) {
        console.log("Redefinindo senha para e-mail:", email.value);
        // Aqui, simula-se um processo de redefinição de senha
        // Após o sucesso, redireciona para a tela de login
        router.push("/");
    }
    else {
        console.log("E-mail não fornecido");
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VApp;
/** @type {[typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    fluid: true,
    ...{ class: "d-flex align-center justify-center" },
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    fluid: true,
    ...{ class: "d-flex align-center justify-center" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    fluid: true,
    ...{ class: "pa-0 d-flex align-center justify-center" },
    ...{ style: {} },
}));
const __VLS_7 = __VLS_6({
    fluid: true,
    ...{ class: "pa-0 d-flex align-center justify-center" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "mx-auto pa-12 pb-8" },
    elevation: "8",
    maxWidth: "448",
    rounded: "lg",
    ...{ style: {} },
    color: "white",
}));
const __VLS_11 = __VLS_10({
    ...{ class: "mx-auto pa-12 pb-8" },
    elevation: "8",
    maxWidth: "448",
    rounded: "lg",
    ...{ style: {} },
    color: "white",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-1 text-medium-emphasis" },
});
const __VLS_13 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    modelValue: (__VLS_ctx.email),
    rules: (__VLS_ctx.emailRules),
    density: "compact",
    placeholder: "Digite seu e-mail",
    prependInnerIcon: "mdi-email-outline",
    variant: "outlined",
}));
const __VLS_15 = __VLS_14({
    modelValue: (__VLS_ctx.email),
    rules: (__VLS_ctx.emailRules),
    density: "compact",
    placeholder: "Digite seu e-mail",
    prependInnerIcon: "mdi-email-outline",
    variant: "outlined",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const __VLS_17 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ 'onClick': {} },
    ...{ class: "mb-8" },
    color: "blue",
    size: "large",
    variant: "tonal",
    block: true,
}));
const __VLS_19 = __VLS_18({
    ...{ 'onClick': {} },
    ...{ class: "mb-8" },
    color: "blue",
    size: "large",
    variant: "tonal",
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
let __VLS_23;
const __VLS_24 = {
    onClick: (__VLS_ctx.handleResetPassword)
};
__VLS_20.slots.default;
var __VLS_20;
var __VLS_12;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-12']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-medium-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            email: email,
            emailRules: emailRules,
            handleResetPassword: handleResetPassword,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
