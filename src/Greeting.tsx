type GreetingProps = {
    name: string | undefined;

}

export default function Greeting({ name }:GreetingProps) {


    return (
        <h1 className={"p-2 m-3 text-blue-950 font-mono"}>Salam, {name ?? 'dost'}!</h1>
    );
}