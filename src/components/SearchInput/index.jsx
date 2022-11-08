import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';
import useSearch from '../../hooks/useSearch';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data, loading, error } = useSearch(searchValue);
  console.log(data);

  return (
    <Container maxW="5xl" mt={5}>
      <InputGroup size="md">
        <Input
          placeholder="Nhập tên, số điện thoại hoặc CCCD/CMT"
          colorScheme={'red'}
          pr="2.5rem"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <InputRightElement width="2.5rem">
          {loading ? (
            <Spinner color="blue.500" />
          ) : (
            <IconButton
              size="sm"
              aria-label="Copy Link"
              icon={<SearchIcon />}
            />
          )}
        </InputRightElement>
      </InputGroup>

      <Box mt={5} p={5} borderRadius="5px" borderWidth="1px">
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Họ và tên</Th>
                <Th>Pháp danh</Th>
                <Th>Số điện thoại</Th>
                <Th>Edit</Th>
              </Tr>
            </Thead>

            <Tbody>
              {!!data.length &&
                (data.length
                  ? data.map(({ data: res, row, editUrl }) => (
                      <Tr key={row}>
                        <Td>{res[0]}</Td>
                        <Td>{res[1]}</Td>
                        <Td>{res[3]}</Td>
                        <Td>
                          <Button
                            onClick={(e) => {
                              window.open(editUrl);
                            }}
                          >
                            Edit
                          </Button>
                        </Td>
                      </Tr>
                    ))
                  : searchValue && (
                      <Tr>
                        <Td colSpan={3}>Không tìm thấy kết quả</Td>
                      </Tr>
                    ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default SearchInput;
