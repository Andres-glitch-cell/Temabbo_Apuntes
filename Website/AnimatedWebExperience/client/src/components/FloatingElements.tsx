export default function FloatingElements() {
  return (
    <>
      <div 
        className="floating-element" 
        style={{ 
          top: '20%', 
          left: '10%', 
          width: '50px', 
          height: '50px', 
          animationDelay: '0s' 
        }} 
      />
      <div 
        className="floating-element" 
        style={{ 
          top: '70%', 
          right: '15%', 
          width: '30px', 
          height: '30px', 
          animationDelay: '2s' 
        }} 
      />
      <div 
        className="floating-element" 
        style={{ 
          top: '40%', 
          right: '25%', 
          width: '40px', 
          height: '40px', 
          animationDelay: '4s' 
        }} 
      />
    </>
  );
}
