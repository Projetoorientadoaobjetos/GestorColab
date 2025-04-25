import { ref } from "vue";
import { useRouter } from "vue-router";
// Variáveis de controle
const router = useRouter();
const visible = ref(false);
const email = ref("");
const password = ref("");
// Regras de validação para o e-mail
const emailRules = [
    (v) => !!v || "E-mail é obrigatório",
    (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
];
// Regras de validação para a senha
const passwordRules = [
    (v) => !!v || "Senha é obrigatória",
    (v) => v.length >= 6 || "A senha deve ter no mínimo 6 caracteres",
];
// Função para validar o formulário e redirecionar para a home
const validateForm = () => {
    if (email.value && password.value) {
        console.log("Formulário validado");
        // Redirecionar para a página inicial após o login bem-sucedido
        router.push("/home-page");
    }
    else {
        console.log("Formulário inválido");
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-1 text-medium-emphasis" },
});
const __VLS_17 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    rules: (__VLS_ctx.passwordRules),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Informe sua senha",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
}));
const __VLS_19 = __VLS_18({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    rules: (__VLS_ctx.passwordRules),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Informe sua senha",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
let __VLS_23;
const __VLS_24 = {
    'onClick:appendInner': (...[$event]) => {
        __VLS_ctx.visible = !__VLS_ctx.visible;
    }
};
var __VLS_20;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex justify-end pt-2 pb-6" },
});
const __VLS_25 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    to: "/forgot-password",
    ...{ class: "text-caption text-decoration-none text-blue" },
}));
const __VLS_27 = __VLS_26({
    to: "/forgot-password",
    ...{ class: "text-caption text-decoration-none text-blue" },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
var __VLS_28;
const __VLS_29 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ 'onClick': {} },
    ...{ class: "mb-8" },
    color: "blue",
    size: "large",
    variant: "tonal",
    block: true,
}));
const __VLS_31 = __VLS_30({
    ...{ 'onClick': {} },
    ...{ class: "mb-8" },
    color: "blue",
    size: "large",
    variant: "tonal",
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
let __VLS_33;
let __VLS_34;
let __VLS_35;
const __VLS_36 = {
    onClick: (__VLS_ctx.validateForm)
};
__VLS_32.slots.default;
var __VLS_32;
const __VLS_37 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    ...{ class: "text-center" },
}));
const __VLS_39 = __VLS_38({
    ...{ class: "text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
const __VLS_41 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    to: "/register-user",
    ...{ class: "text-blue text-decoration-none" },
}));
const __VLS_43 = __VLS_42({
    to: "/register-user",
    ...{ class: "text-blue text-decoration-none" },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
__VLS_44.slots.default;
const __VLS_45 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    icon: "mdi-chevron-right",
}));
const __VLS_47 = __VLS_46({
    icon: "mdi-chevron-right",
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
var __VLS_44;
var __VLS_40;
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
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-medium-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            visible: visible,
            email: email,
            password: password,
            emailRules: emailRules,
            passwordRules: passwordRules,
            validateForm: validateForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
