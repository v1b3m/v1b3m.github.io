import { Box, Text } from "@chakra-ui/react";
import data from "./data";
import { ActiveTab } from "./index";
import Notable from "./Notable";

export default function Content({
  activeTab,
  company,
}: {
  activeTab: ActiveTab;
  company: string;
}): JSX.Element {
  return (
    <Box pl="2rem">
      <Text textStyle="workTitle">{data[activeTab].role}</Text>
      <Text
        fontWeight={500}
        fontSize="1.5rem"
        display="inline"
        textStyle="link"
      >
        @{company}
      </Text>
      <Text textStyle="code" marginBottom="1rem">
        {data[activeTab].startDate} - {data[activeTab].endDate}
      </Text>
      {data[activeTab].highlights.map((text, index) => (
        <Notable text={text} key={index} />
      ))}
    </Box>
  );
}
