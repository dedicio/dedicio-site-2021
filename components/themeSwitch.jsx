import styled from 'styled-components'

const isLightTheme = (theme) => theme === 'light'

const Switch = styled.span`
  position: absolute;
  left: 1rem;
  top: 1rem;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 40px;
  border: 1px solid ${props => isLightTheme(props.theme) ? '#000' : '#FFF'};
  background-color: ${props => isLightTheme(props.theme) ? '#1D1E1E' : '#E0E1E1'};
  overflow: hidden;
  cursor: pointer;
`

const Button = styled.span`
  position: absolute;
  left: ${props => isLightTheme(props.theme) ? 0 : 'auto'};
  right: ${props => isLightTheme(props.theme) ? 'auto' : 0};
  top: 0;
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 40px;
  background-color: ${props => isLightTheme(props.theme) ? '#E0E1E1' : '#1D1E1E'};
  z-index: 3;
`

const Moon = ({ className }) => {
  return (
    <span className={className}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M6.4547 11.7352C3.29064 11.7352 0.719543 9.16174 0.719543 6.00002C0.719543 2.8383 3.29298 0.264862 6.4547 0.264862C6.64689 0.264862 6.83907 0.274237 7.03126 0.292987C7.20001 0.309393 7.34767 0.414862 7.41798 0.567206C7.48829 0.71955 7.47423 0.900018 7.38048 1.04064C6.84142 1.83283 6.55548 2.75861 6.55548 3.71721C6.55548 6.17814 8.40001 8.22189 10.8492 8.46564C11.018 8.48205 11.1656 8.58752 11.2359 8.73986C11.3086 8.89221 11.2922 9.07267 11.1984 9.2133C10.125 10.793 8.35314 11.7352 6.4547 11.7352V11.7352ZM6.16173 1.23517C3.66564 1.38752 1.68048 3.46642 1.68048 6.00002C1.68048 8.63205 3.82267 10.7742 6.4547 10.7742C7.77657 10.7742 9.02345 10.2258 9.91876 9.28127C8.83595 9.00705 7.85392 8.41877 7.08751 7.57971C6.12423 6.52033 5.5922 5.15158 5.5922 3.72189C5.59454 2.85236 5.78907 2.00627 6.16173 1.23517Z" fill="#100F0D"/>
      </svg>
    </span>
  )
}

const Sun = ({ className }) => {
  return (
    <span className={className}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2.47266C4.03359 2.47266 2.43281 4.07344 2.43281 6.03984C2.43281 8.00625 4.03359 9.60703 6 9.60703C7.96641 9.60703 9.56719 8.00625 9.56719 6.03984C9.56719 4.07109 7.96641 2.47266 6 2.47266ZM6 8.64844C4.56094 8.64844 3.38906 7.47656 3.38906 6.0375C3.38906 4.59844 4.56094 3.42656 6 3.42656C7.43906 3.42656 8.61094 4.59844 8.61094 6.0375C8.61094 7.47656 7.43906 8.64844 6 8.64844V8.64844ZM6 1.75313C6.26484 1.75313 6.47812 1.53984 6.47812 1.275V0.735937C6.47812 0.471094 6.26484 0.257812 6 0.257812C5.73516 0.257812 5.52188 0.471094 5.52188 0.735937V1.275C5.52188 1.53984 5.73516 1.75313 6 1.75313V1.75313ZM6 10.2469C5.73516 10.2469 5.52188 10.4602 5.52188 10.725V11.2617C5.52188 11.5266 5.73516 11.7398 6 11.7398C6.26484 11.7398 6.47812 11.5266 6.47812 11.2617V10.725C6.47812 10.4625 6.26484 10.2469 6 10.2469V10.2469ZM11.2641 5.52188H10.725C10.4602 5.52188 10.2469 5.73516 10.2469 6C10.2469 6.26484 10.4602 6.47812 10.725 6.47812H11.2641C11.5289 6.47812 11.7422 6.26484 11.7422 6C11.7422 5.73516 11.5289 5.52188 11.2641 5.52188V5.52188ZM1.275 5.52188H0.735937C0.471094 5.52188 0.257812 5.73516 0.257812 6C0.257812 6.26484 0.471094 6.47812 0.735937 6.47812H1.27266C1.5375 6.47812 1.75078 6.26484 1.75078 6C1.75312 5.73516 1.5375 5.52188 1.275 5.52188V5.52188ZM9.38437 1.94063L9.00234 2.32031C8.81484 2.50781 8.81484 2.81016 9.00234 2.99766C9.18984 3.18516 9.49219 3.18516 9.67969 2.99766L10.0594 2.61797C10.2469 2.43047 10.2469 2.12813 10.0594 1.94063C9.87188 1.75313 9.56953 1.75313 9.38437 1.94063V1.94063ZM2.32031 9.00234L1.94063 9.38203C1.75313 9.56953 1.75313 9.87188 1.94063 10.0594C2.12813 10.2469 2.43047 10.2469 2.61797 10.0594L2.99766 9.67969C3.18516 9.49219 3.18516 9.18984 2.99766 9.00234C2.81016 8.81484 2.50781 8.81719 2.32031 9.00234ZM9.67969 9.00234C9.49219 8.81484 9.18984 8.81484 9.00234 9.00234C8.81484 9.18984 8.81484 9.49219 9.00234 9.67969L9.38203 10.0594C9.56953 10.2469 9.87188 10.2469 10.0594 10.0594C10.2469 9.87188 10.2469 9.56953 10.0594 9.38203L9.67969 9.00234ZM2.32031 2.99766C2.50781 3.18516 2.81016 3.18516 2.99766 2.99766C3.18516 2.81016 3.18516 2.50781 2.99766 2.32031L2.61797 1.94063C2.43047 1.75313 2.12813 1.75313 1.94063 1.94063C1.75313 2.12813 1.75313 2.43047 1.94063 2.61797L2.32031 2.99766Z" fill="#FFFFFF"/>
      </svg>
    </span>
  )
}

const StyledMoon = styled(Moon)`
  position: absolute;
  left: 3px;
  top: -2px;
  z-index: 2;
`

const StyledSun = styled(Sun)`
  position: absolute;
  right: 3px;
  top: -2px;
  z-index: 2;
`

const ThemeSwitch = (props) => {
  const { onSwitchChanged, theme } = props

  return (
    <Switch
      theme={theme}
      onClick={onSwitchChanged}>
      <Button theme={theme}></Button>
      <StyledMoon />
      <StyledSun />
    </Switch>
  )
}

export default ThemeSwitch