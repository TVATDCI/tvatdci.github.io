/**Here is also a separate example of the Heading component,
 * which is created in the src/components/Heading.jsx file..
 * Outside of the App
 * className is used to style the Heading component.
 * title is used to change the title of the Heading component.
 * This way Heading can be very reusable component.
 * It will use for different styles. As title, subtitle, large text, small text etc.
 */
const Heading = ({ className, title, text }) => {
    {
        /* Specifically, you can also use the className property to style the Heading component within the div below to accept the className property with dynamic template string {`${className}`} */
    }
    return (
        <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
            {title && <h1>{title}</h1>}
            {/** Above is how you render the title with the h2 tag */}
            {/** Adding text to the props with the p tag. You can render the text however you */}
            {text && <p className="body-2 text-n-4 mt-4">{text}</p>}
        </div>
    );
};

export default Heading;

/**
 * className styling belongs to tailwindcss!
 */
