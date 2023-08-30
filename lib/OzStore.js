
/**
 * 
 *  Rendering
 * 
 * 1) Import this lib into every component that needs access to the global data.
 *    Update the hash to fit your needs, then place the store in the lib dir,
 *    then import into the App.js file and every other component file needed.
 *      e.g.:
 *              import {ozStore} from './lib/OzStore';
 * 
 * 1) Every time react renders it executes all of the code within each component
 *    cascading down through the code of each child from the current component down
 *    while performing the rendering. Therefore, if a child component issued a render
 *    then the parents components and associated code will not be re-rendered.
 * 
 * 2) ozStore.setRender & ozStroe.render - these are used to force render from the root
 *    component all they way down to all components. This complete rendering will be done
 *    even when invoked from a child component. To accomplish this do the following:
 * 
 *      in the App component define:
 *      [ozStore.render, ozStore.setRender] = useState(true);
 * 
 *      To force a render of all of components, from any component execute:
 *          ozStore.setRender(!ozStore.render)
 * 
 *      Note: re-redering everything may be cpu intensive. If you want to render only a
 *            component locally and to its childrens then define a local useState and
 *            use it instead.
 * 
 * 2) If you append a new hash element to the global has within the body of the component
 *    function react will reintialize the value to the original value during each render. If
 *    you don't want this behaviour then add the new element at the header of the component
 *    file before the function definition, this way the value will be initialized only once.
 *
 * 3) While the globals are available to all components React will not render after evrey
 *    value change. To get the values changes propogate to all components run your own render
 *    by executing setRender passing it a new value. Do the rendering by potentially executing
 *    the setRender in the App component.
 * 
 */

const hs = {name: 'jacobx', age: 21, address: '4544 refugio dr', count: 1, hex: 'F00088', color: 'lightgreen', flex: 1, hide: false, myState: 'NULL', render: false, setRender: false};

let ozStore=hs;

export {ozStore};