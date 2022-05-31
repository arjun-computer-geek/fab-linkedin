import styled from "styled-components";
import { Home } from "@styled-icons/boxicons-solid/Home";
import { People } from "@styled-icons/ionicons-sharp/People";
import { MessageSquare } from "@styled-icons/evaicons-solid/MessageSquare";
import { Notifications } from "@styled-icons/material-rounded/Notifications";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { CaretDown } from "@styled-icons/ionicons-sharp/CaretDown";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { Plus } from "styled-icons/boxicons-regular";

export const DownIcon = styled(CaretDown)`
  height: 1rem !important;
`;
export const HomeIcon = styled(Home)`
  color: gray;
  height: 2rem !important;
`;
export const MyNetworksIcon = styled(People)`
  height: 2rem !important;
  color: gray;
`;
export const MessageIcon = styled(MessageSquare)`
  height: 2rem !important;
  color: gray;
`;
export const NotificationIcon = styled(Notifications)`
  height: 2rem !important;
  color: gray;
`;
export const UserIcon = styled(UserCircle)`
  height: 2rem !important;
  color: gray;
`;
export const ThreeDotsIcon = styled(ThreeDots)`
  height: 2rem !important;
  color: gray;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
  }
`;
export const PlusIcon = styled(Plus)`
  height: 2rem !important;
  color: red;
`;
