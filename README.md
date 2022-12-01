Template Driven V/s Reactive approach
If you have very simple forms (e.g. with built-in validators only), it might be easier to write a template-driven form in the template only and let Angular create the form model automatically in the background. But the more complex your forms are (e.g. custom validation or dynamic parts) the more the initial overhead of creating the form in the template and the form model in the TS class will pay off.
TD: need to register controls manually

ngSubmit is an event, not a directive.
Usually we work with the equivalents of the native events in Angular, like (click) = "...", (input) = "..." , but the native submit event would cause an http request by default, and that's not what we want in Angular. So Angular provides this additional built-in event.