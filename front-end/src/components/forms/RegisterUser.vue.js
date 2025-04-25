import { ref } from "vue";
import { useRouter } from "vue-router";
// Variáveis de controle
const router = useRouter();
const visible = ref(false);
const email = ref("");
const confirmaEmail = ref("");
const password = ref("");
const confirmPassword = ref("");
// Regras de validação para o e-mail
const emailRules = [
    (v) => !!v || "E-mail é obrigatório",
    (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
    (v) => v.length <= 50 || "O e-mail deve ter no máximo 50 caracteres",
];
const emailconfirmRules = [
    (v) => !!v || "E-mail é obrigatório",
    (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
    (v) => v === email.value || "Os e-mails não coincidem",
    (v) => v.length <= 50 || "O e-mail deve ter no máximo 50 caracteres",
];
// Regras de validação para a senha
const passwordRules = [
    (v) => !!v || "Senha é obrigatória",
    (v) => v.length >= 6 || "A senha deve ter no mínimo 6 caracteres",
    (v) => v.length <= 40 || "O e-mail deve ter no máximo 40 caracteres",
];
const passwordconfirmRules = [
    (v) => !!v || "Senha é obrigatória",
    (v) => v.length >= 6 || "A senha deve ter no mínimo 6 caracteres",
    (v) => v === password.value || "A senha não coincide",
    (v) => v.length <= 40 || "O e-mail deve ter no máximo 40 caracteres",
];
// Função para validar o formulário e redirecionar para a home
const validateForm = () => {
    if (email.value && password.value) {
        console.log("Formulário validado");
        // Redirecionar para a página inicial após o registro bem-sucedido
        router.push("/");
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
    modelValue: (__VLS_ctx.confirmaEmail),
    rules: (__VLS_ctx.emailconfirmRules),
    density: "compact",
    placeholder: "Confirme seu e-mail",
    prependInnerIcon: "mdi-email-outline",
    variant: "outlined",
}));
const __VLS_19 = __VLS_18({
    modelValue: (__VLS_ctx.confirmaEmail),
    rules: (__VLS_ctx.emailconfirmRules),
    density: "compact",
    placeholder: "Confirme seu e-mail",
    prependInnerIcon: "mdi-email-outline",
    variant: "outlined",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-1 text-medium-emphasis" },
});
const __VLS_21 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
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
const __VLS_23 = __VLS_22({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    rules: (__VLS_ctx.passwordRules),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Informe sua senha",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_25;
let __VLS_26;
let __VLS_27;
const __VLS_28 = {
    'onClick:appendInner': (...[$event]) => {
        __VLS_ctx.visible = !__VLS_ctx.visible;
    }
};
var __VLS_24;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-1 text-medium-emphasis" },
});
const __VLS_29 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.confirmPassword),
    rules: (__VLS_ctx.passwordconfirmRules),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Confirme sua senha",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
}));
const __VLS_31 = __VLS_30({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.confirmPassword),
    rules: (__VLS_ctx.passwordconfirmRules),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Confirme sua senha",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
let __VLS_33;
let __VLS_34;
let __VLS_35;
const __VLS_36 = {
    'onClick:appendInner': (...[$event]) => {
        __VLS_ctx.visible = !__VLS_ctx.visible;
    }
};
var __VLS_32;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex justify-end pt-2 pb-6" },
});
const __VLS_37 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    to: "/forgot-password",
    ...{ class: "text-caption text-decoration-none text-blue" },
}));
const __VLS_39 = __VLS_38({
    to: "/forgot-password",
    ...{ class: "text-caption text-decoration-none text-blue" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
var __VLS_40;
const __VLS_41 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    ...{ 'onClick': {} },
    ...{ class: "mb-8" },
    color: "blue",
    size: "large",
    variant: "tonal",
    block: true,
}));
const __VLS_43 = __VLS_42({
    ...{ 'onClick': {} },
    ...{ class: "mb-8" },
    color: "blue",
    size: "large",
    variant: "tonal",
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
let __VLS_45;
let __VLS_46;
let __VLS_47;
const __VLS_48 = {
    onClick: (__VLS_ctx.validateForm)
};
__VLS_44.slots.default;
var __VLS_44;
const __VLS_49 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    ...{ class: "text-center" },
}));
const __VLS_51 = __VLS_50({
    ...{ class: "text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
const __VLS_53 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    to: "/login",
    ...{ class: "text-blue text-decoration-none" },
}));
const __VLS_55 = __VLS_54({
    to: "/login",
    ...{ class: "text-blue text-decoration-none" },
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
__VLS_56.slots.default;
const __VLS_57 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    icon: "mdi-chevron-right",
}));
const __VLS_59 = __VLS_58({
    icon: "mdi-chevron-right",
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
var __VLS_56;
var __VLS_52;
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
            confirmaEmail: confirmaEmail,
            password: password,
            confirmPassword: confirmPassword,
            emailRules: emailRules,
            emailconfirmRules: emailconfirmRules,
            passwordRules: passwordRules,
            passwordconfirmRules: passwordconfirmRules,
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
