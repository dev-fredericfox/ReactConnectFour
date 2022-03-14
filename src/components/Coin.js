function Coin(props) {
return  <div data-testid='coin' className={`bg-${props.color ?? 'white'} absolute m-auto w-6 h-6 rounded-full ml-2 mt-2`}/>
}

export default Coin