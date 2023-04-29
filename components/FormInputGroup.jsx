import { Box, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';

const FormInputGroup = ({
  text,
  value,
  placeholder,
  icon,
  onInput,
  onKeyUp,
  readOnly = false,
}) => (
  <Box>
    <InputGroup>
      <InputLeftAddon>
        {text}
        {icon}
      </InputLeftAddon>
      <Input
        type="number"
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        onKeyUp={onKeyUp}
        readOnly={readOnly}
      />
    </InputGroup>
  </Box>
);

export default FormInputGroup;
