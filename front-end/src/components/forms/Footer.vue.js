const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VFooter;
/** @type {[typeof __VLS_components.VFooter, typeof __VLS_components.vFooter, typeof __VLS_components.VFooter, typeof __VLS_components.vFooter, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "text-center d-flex flex-column ga-0 py-0" },
    color: "blue",
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "text-center d-flex flex-column ga-0 py-0" },
    color: "blue",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex ga-3" },
});
for (const [icon] of __VLS_getVForSourceType((__VLS_ctx.icons))) {
    const __VLS_5 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        key: (icon),
        icon: (icon),
        density: "comfortable",
        variant: "text",
    }));
    const __VLS_7 = __VLS_6({
        key: (icon),
        icon: (icon),
        density: "comfortable",
        variant: "text",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
const __VLS_9 = {}.VDivider;
/** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "my-2" },
    thickness: "2",
    width: "50",
}));
const __VLS_11 = __VLS_10({
    ...{ class: "my-2" },
    thickness: "2",
    width: "50",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption font-weight-regular white--text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
const __VLS_13 = {}.VDivider;
/** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
(new Date().getFullYear());
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['ga-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['ga-3']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['white--text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            icons: icons,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
