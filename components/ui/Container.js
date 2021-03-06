export const Container = ({ children, align = 'stretch' }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          display: flex;

          flex-direction: column;
          width: 100%;
          max-width: 768px;
        }
      `}</style>

      <style jsx>{`
        align-items: ${align};
      `}</style>
    </div>
  )
}
