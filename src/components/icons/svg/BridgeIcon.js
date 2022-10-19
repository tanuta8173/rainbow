import PropTypes from 'prop-types';
import React from 'react';
import { Path } from 'react-native-svg';
import Svg from '../Svg';

const BridgeIcon = ({ color, colors, ...props }) => (
  <Svg height="17" viewBox="0 0 17 17" width="15" {...props}>
    <Path
      d="M0.237793 9.16211C0.237793 9.5542 0.549316 9.84961 0.95752 9.84961H2.28418C3.26172 9.84961 3.85791 9.54883 4.46484 8.80762L5.76465 7.22852L7.00537 8.74316C7.66602 9.5542 8.4502 9.85498 9.42773 9.85498H10.416V11.085C10.416 11.418 10.6201 11.6221 10.9478 11.6221C11.0981 11.6221 11.2271 11.5684 11.3291 11.4824L13.5742 9.5918C13.8213 9.38232 13.8213 9.04395 13.5742 8.83447L11.3291 6.94385C11.2271 6.85791 11.0981 6.8042 10.9478 6.8042C10.6201 6.8042 10.416 7.00293 10.416 7.33594V8.46924H9.45459C8.75098 8.46924 8.2998 8.23828 7.84326 7.67969L6.61865 6.18115L7.854 4.67188C8.32666 4.0918 8.69189 3.89307 9.37402 3.89307H10.416V5.02637C10.416 5.35938 10.6201 5.55811 10.9478 5.55811C11.0981 5.55811 11.2271 5.50439 11.3291 5.41846L13.5742 3.52783C13.8213 3.31836 13.8213 2.98535 13.5742 2.77051L11.3291 0.879883C11.2271 0.793945 11.0981 0.740234 10.9478 0.740234C10.6201 0.740234 10.416 0.944336 10.416 1.27734V2.50732H9.43848C8.38037 2.50732 7.67139 2.78662 6.91406 3.71582L5.75928 5.13379L4.46484 3.55469C3.85791 2.81348 3.16504 2.5127 2.19287 2.5127H0.95752C0.549316 2.5127 0.237793 2.80811 0.237793 3.2002C0.237793 3.59229 0.549316 3.89307 0.95752 3.89307H2.03711C2.71924 3.89307 3.22412 4.12402 3.68066 4.68262L4.90527 6.18115L3.68066 7.67969C3.22412 8.24365 2.81055 8.46924 2.13379 8.46924H0.95752C0.549316 8.46924 0.237793 8.77002 0.237793 9.16211Z"
      fill={color || colors.white}
      fillRule="nonzero"
    />
  </Svg>
);

BridgeIcon.propTypes = {
  color: PropTypes.string,
};

export default BridgeIcon;