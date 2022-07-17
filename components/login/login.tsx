import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  Username,
  Password,
  Disclaimer,
  SubmitButton,
} from '../../helpers/fields/fields';
import { ToastContainer } from 'react-toastify';

export const Login = () => {
  return (
    <Container className="login form-group">
      <img
        src="https://doc-04-b0-docs.googleusercontent.com/docs/securesc/hbjh1mv8vhroko9454b6eh3c4duekbju/obkg66vdti0r84tl077r55tqlsrqsrgn/1658079750000/12258978775788100312/01411648871605818971/1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH?e=view&ax=ACxEAsac2Qf1IxqRBLjTOP6WppCqZ9duSnNwzYbSXcbfM7ncwlOlsxyePp3r8vkq86DGpC36Q5IinwF5v6vMUpLYdWv0UxFpgBub2UlKKU4T4yCRlMDf1VBWWC47l1zypxpjPbMty0t8j6nfh-cbmW05Kb1snhCD8w4BaA0QZmNokj74XVVaVRVGh46tzjcLnMZmLqgwNu1HEr2pGjy0PrY-_pDfeAzx0ZiIcwH5Z9SsNqaHhIAuzWKZqnXrSsziC1lxl2UfGTXNNHb7zOMHL1efbdeG3k5x_DloNUCm_VYTzezpwAIvbwZYxjqf1KK-8igM9QxIhD8xxlAz-5_ysJOJm2n7NH0ClTr62SugHLeQn2r3lz905oMkZZ7GL1FQXI3Ny7qNwTB84PONRoMIZRBu7odDTJpA08fzIDIMxAkHJdVzp32zN0GZ0PB_vn48ZvItCBAPGuRIP5-yxRw6WVXjhyOaT6tc87-f3IK7Gz8u3d4rHD767t6RSpROicbD_dJlkIFlOvRQjQvxvNw0UqDNB7wPg4RrdI85NEL4rGijfBJFgso7GE4DzrKjbSvUp-_Y9enGz3Y86tZW2K6M492wPCTYdxM0LANGDr_3wMlG2ow5g7WG4odblbnOlz2bHIFMEqFSv7b8JXo1tJ1_vDm-oBbGCvcJCMNAUJHPy_VFkqTbBq-Ppa8MRpfTPtTmB0OT0E_OfxCvzxqxt0OZ&uuid=b5cea770-fa2d-4822-a06f-e098e2daf298&authuser=0"
        alt="logo"
      />
      <Row>
        <h4>Hello there, Sign in to continue</h4>
        <div className="fields">
          <Username />
          <Password />
          <Disclaimer />
          <SubmitButton />
        </div>
        <ToastContainer />
      </Row>
    </Container>
  );
};
