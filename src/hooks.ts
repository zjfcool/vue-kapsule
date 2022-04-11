import { provide, inject } from 'vue'
function useProvider(fn:FnProps, ...args:any) {
    !fn.token && (fn.token = Symbol())
    provide(fn.token, fn(...args))
}
function useInjector(fn:FnProps|Symbol) {
    const token:Symbol = typeof fn === 'symbol' ? fn : (fn as FnProps).token!;
    return inject(token)
}
export interface FnProps {
    (data?:any):any
    token?:Symbol
}
export interface UseGraphContext {
    <T>(ctx: T): T;
    token?: Symbol;
}
export interface MenuData {
    graphContext: any;
    activeData: any;
    event: any;
}
export interface UseMenuData {
    (data: MenuData): MenuData;
    token?: Symbol;
}
let useGraphContext: UseGraphContext = (ctx) => {
    return ctx
}
let useMenuData: UseMenuData = (data: MenuData) => {
    return data
}
export {
    useProvider,
    useInjector,
    useGraphContext,
    useMenuData
}